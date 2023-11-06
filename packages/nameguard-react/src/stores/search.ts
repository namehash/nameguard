import { create } from "zustand";

type SearchState = {
  name: string;
  setName: (name: string) => void;

  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
}));