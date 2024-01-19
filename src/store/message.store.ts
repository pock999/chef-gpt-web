import { create } from 'zustand';
import { MessageVO } from '../api';
import { MessageService } from '../services';

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
  postMessage: (conversationId: number | string, question: string) => Promise<void>;
  fetchMessageList:(conversationId: number | string, isInit: boolean) => Promise<void>;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  msgList: [],
  listLoading: false,
  pagination: {
    page: 1,
    count: 20,
    totalPage: 0,
    totalCount: 0,
  },
  postMessage: async (conversationId: number | string, question: string) => {

    const { msgList, pagination} = get();

    // temp
    set({
      msgList: [...msgList, {
        id: -1,
        role: 'user',
        content: question,
      }],
    });
    const data = await MessageService.postMessage({
      conversation_id: +conversationId,
      question,
    });

    set({
      msgList: [...msgList, data.question, data.answer],
      pagination: {
        ...pagination,
        totalCount: pagination.totalCount + 1,
      }
    });

  },
  fetchMessageList: async (conversationId: number | string, isInit: boolean = false) => {
    const { msgList } = get();

    set({
      listLoading: true,
    });

    const {page, count} = get().pagination;
    let newPage = page;
    let newMsgList: Array<MessageVO> = [];

    if(!isInit) {
      newPage += 1;
      newMsgList = [...msgList];
    } else {
      newPage = 1;
    }
    
    const data = await MessageService.getMessageList(+conversationId, {page: newPage, count});

    newMsgList = [...data.messages.reverse(), ...newMsgList];
    set({
      msgList: newMsgList,
      listLoading: false,
      pagination: {
        page: newPage,
        count,
        totalCount: data.page.total_count,        
        totalPage: data.page.total_page,        
      }
    });
  },
}));