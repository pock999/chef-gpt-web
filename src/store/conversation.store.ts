import { create } from 'zustand';
import { ConversationGetListItemResVO } from '../api';
import { ConversationService } from '../services';


interface ConversationState {
  conversationList: Array<ConversationGetListItemResVO>;
  listLoading: boolean;
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
  createConversation: () => Promise<number>;
  getTitle: (conversationId: number | string) => Promise<string>;
}

export const useConversationStore = create<ConversationState>((set, get) => ({
  conversationList: [],
  listLoading: false,
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
      listLoading: true,
    });
    const {page, count} = get().pagination;
    const data = await ConversationService.getConversationList({page, count});
    set({
      conversationList: data.conversations,
      listLoading: false,
      pagination: {
        page,
        count,
        totalCount: data.page.total_count,        
        totalPage: data.page.total_page,        
      }
    });
  },
  createConversation: async (): Promise<number> => {
    const {conversationList} = get();
    const createConversationResult = await ConversationService.createConversation();

    set({
      conversationList: [...conversationList, {
        ...createConversationResult,
        title: null, // 先下 null
      }],
    });

    return createConversationResult.id;
  },
  getTitle: async (conversationId: number | string) => {
    const result = await ConversationService.getTitle(+conversationId);
    return result.title;
  },
}));