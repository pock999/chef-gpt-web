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
  fetchMessageList:(conversationId: number | string) => Promise<void>;
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

    const data = await MessageService.postMessage({
      conversation_id: +conversationId,
      question,
    });

    const { msgList } = get();

    set({
      msgList: [...msgList, data.question, data.answer],
    });

  },
  fetchMessageList: async (conversationId: number | string) => {
    set({
      listLoading: true,
    });

    const {page, count} = get().pagination;
    const data = await MessageService.getMessageList(+conversationId, {page, count});
    set({
      msgList: data.messages,
      listLoading: false,
      pagination: {
        page,
        count,
        totalCount: data.page.total_count,        
        totalPage: data.page.total_page,        
      }
    });
  },
}));