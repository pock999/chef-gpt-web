import { create } from 'zustand';

interface CommonState {
  pageLoading: boolean;
  setPageLoading: (val: boolean) => void,
}

export const useCommonStore = create<CommonState>((set) => ({
  pageLoading: false,
  setPageLoading: (val) => set(() => ({
    pageLoading: val,
  }))
}));