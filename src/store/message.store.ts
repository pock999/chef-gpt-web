import { create } from "zustand";
import { MessageVO } from "../api";
import { MessageService } from "../services";

interface MessageState {
  msgList: Array<MessageVO>;
  listLoading: boolean;
  pagination: {
    // current page
    page: number;
    count: number;
    totalPage: number;
    totalCount: number;
  };
  isGenerating: boolean;
  postTempMessage: (question: string) => void;
  postMessage: (
    conversationId: number | string,
    question: string
  ) => Promise<void>;
  fetchMessageList: (
    conversationId: number | string,
    isInit: boolean
  ) => Promise<void>;
  clearMsgList: () => void;
  setIsGenerating: (val: boolean) => void;
}

const initState = {
  msgList: [],
  listLoading: false,
  pagination: {
    page: 1,
    count: 20,
    totalPage: 0,
    totalCount: 0,
  },
  isGenerating: false,
};

export const useMessageStore = create<MessageState>((set, get) => ({
  msgList: [],
  listLoading: false,
  pagination: {
    page: 1,
    count: 20,
    totalPage: 0,
    totalCount: 0,
  },
  isGenerating: false,
  postTempMessage: (question: string) => {
    const { msgList, pagination } = get();
    set({
      msgList: [
        ...msgList,
        {
          id: -1,
          role: "user",
          content: question,
        },
      ],
    });
  },
  postMessage: async (conversationId: number | string, question: string) => {
    const { msgList, pagination } = get();

    // temp
    // set({
    //   msgList: [
    //     ...msgList,
    //     {
    //       id: -1,
    //       role: "user",
    //       content: question,
    //     },
    //   ],
    // });
    const data = await MessageService.postMessage({
      conversation_id: +conversationId,
      question,
    });

    const exceptLastList = msgList.slice(0, -1);

    set({
      msgList: [...exceptLastList, data.question, data.answer],
      pagination: {
        ...pagination,
        totalCount: pagination.totalCount + 1,
      },
    });
  },
  fetchMessageList: async (
    conversationId: number | string,
    isInit: boolean = false
  ) => {
    const { msgList } = get();

    set({
      listLoading: true,
    });

    const { page, count } = get().pagination;
    let newPage = page;
    let allMsgList: Array<MessageVO> = [];

    let data = await MessageService.getMessageList(+conversationId, {
      page: newPage,
      count,
    });

    if (isInit) {
      // NOTE: 第一次全 Load
      allMsgList = data.messages.reverse();
      const { total_page } = data.page;

      for (
        let currentPage = newPage + 1;
        currentPage <= total_page;
        currentPage++
      ) {
        data = await MessageService.getMessageList(+conversationId, {
          page: currentPage,
          count,
        });
        allMsgList = [...data.messages.reverse(), ...allMsgList];
      }
      newPage = total_page;
    } else {
      allMsgList = [...data.messages.reverse(), ...msgList];
    }

    set({
      msgList: allMsgList,
      listLoading: false,
      pagination: {
        page: newPage,
        count,
        totalCount: data.page.total_count,
        totalPage: data.page.total_page,
      },
    });
  },
  clearMsgList: () => {
    set(initState);
  },
  setIsGenerating: (val: boolean) => {
    set({
      isGenerating: val,
    });
  },
}));
