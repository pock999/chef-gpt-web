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
  fetchConversationList: (isInit: boolean) => Promise<void>;
  createConversation: () => Promise<number>;
  deleteConversation: (conversationId: number | string) => Promise<void>;
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
  fetchConversationList: async (isInit: boolean = false) => {

    set({
      listLoading: true,
    });
    const { conversationList, pagination } = get();
    const { page, count } = pagination;
    let newPage = page;
    let allConversations: Array<ConversationGetListItemResVO> = [];

    let data = await ConversationService.getConversationList({page: newPage, count});
    
    if(isInit) {
      // NOTE: 第一次全 Load
      allConversations = data.conversations;
      const { total_page } = data.page;
      
      for(let currentPage = newPage + 1; currentPage <= total_page; currentPage++) {
        data = await ConversationService.getConversationList({page: currentPage, count});
        allConversations = [...allConversations, ...data.conversations];
      }
      newPage = total_page;

    } else {
      allConversations = [...conversationList,...data.conversations];
    }

    set({
      conversationList: allConversations,
      listLoading: false,
      pagination: {
        page: newPage,
        count,
        totalCount: data.page.total_count,        
        totalPage: data.page.total_page,        
      }
    });
  },
  createConversation: async (): Promise<number> => {
    const {conversationList, pagination, fetchConversationList} = get();
    const createConversationResult = await ConversationService.createConversation();

    let newConversationList = [...conversationList, {
      ...createConversationResult,
      title: null, // 先下 null
    }];

    if(newConversationList.length > pagination.totalCount) {
      set({
        conversationList: [{
          ...createConversationResult,
          title: null, // 先下 null
        }, ...conversationList],
        pagination: {
          ...pagination,
          totalCount: pagination.totalCount + 1,
        },
      });
    } else {
      await fetchConversationList(false);
    }

    return createConversationResult.id;
  },
  deleteConversation: async (conversationId: number | string) => {
    await ConversationService.deleteConversation(+conversationId);
    const {conversationList, pagination, fetchConversationList} = get();

    let newConversationList = conversationList.filter(item => `${item.id}` !== `${conversationId}`);
    let newTotal = pagination.totalCount - 1;
    if(newConversationList.length >= newTotal) {
      set({
        conversationList: newConversationList,
        pagination: {
          ...pagination,
          totalCount: newTotal,
        },
      });
    } else {
      await fetchConversationList(false);
    }

  },
  getTitle: async (conversationId: number | string) => {
    const result = await ConversationService.getTitle(+conversationId);
    return result.title;
  },
}));