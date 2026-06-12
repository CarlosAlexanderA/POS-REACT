import {create} from 'zustand';

interface AsideStore {
  isOpen: boolean;
  toggleAside: () => void;
}

export const useAsideStore = create<AsideStore>((set) => ({
  isOpen: false,
  toggleAside: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
