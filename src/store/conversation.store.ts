import { create } from 'zustand';
import { ConversationGetListItemResVO } from '../api';
import { ConversationService } from '../services';


interface ConversationState {
  conversationList: Array<ConversationGetListItemResVO>;
  loading: boolean;
  pagination: {
    // current page
    page: number;
    count: number;
    totalPage: number;
    totalCount: number;
  };
  setConversationList: (val: Array<ConversationGetListItemResVO>) => void,
  setPagination: (val: {
    // current page
    page: number;
    count: number;
    totalPage: number;
    totalCount: number;
  }) => void;
  fetchConversationList: () => Promise<void>;
}

export const useConversationStore = create<ConversationState>((set, get) => ({
  conversationList: [],
  loading: false,
  pagination: {
    page: 1,
    count: 20,
    totalPage: 0,
    totalCount: 0,
  },
  setConversationList: (val) => set(() => ({
    conversationList: val,
  })),
  setPagination: (val) => set(() => ({
    pagination: val,
  })),
  fetchConversationList: async () => {
    set({
      loading: true,
    });
    const {page, count} = get().pagination;
    const data = await ConversationService.getConversationList({page, count});
    set({
      conversationList: data.conversations,
      loading: false,
      pagination: {
        page,
        count,
        totalCount: data.page.total_count,        
        totalPage: data.page.total_page,        
      }
    });
  },
}));