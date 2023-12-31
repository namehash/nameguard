import { create } from "zustand";

export type GraphemeModalState = {
  currentGrapheme?: string;
  graphemes: string[];
  isGraphemeModalOpen: boolean;
  openGraphemeModal: (grapheme: string) => void;
  closeGraphemeModal: (grapheme?: string) => void;
  closeAllGraphemeModals: () => void;
};

export const useGraphemeModalStore = create<GraphemeModalState>((set, get) => ({
  currentGrapheme: undefined,
  graphemes: [],
  isGraphemeModalOpen: false,
  openGraphemeModal: (grapheme) => {
    const { graphemes } = get();

    set({
      graphemes: [...graphemes, grapheme],
      currentGrapheme: grapheme,
      isGraphemeModalOpen: true,
    });
  },
  closeGraphemeModal: (grapheme) => {
    const { graphemes, currentGrapheme } = get();
    const graphemeToClose = grapheme ?? currentGrapheme;

    if (!graphemeToClose) return;

    const newGraphemes = graphemes.filter((g) => g !== graphemeToClose);
    const isAnyGraphemeOpen = newGraphemes.length > 0;

    set({
      graphemes: newGraphemes,
      currentGrapheme: isAnyGraphemeOpen
        ? newGraphemes[newGraphemes.length - 1]
        : undefined,
      isGraphemeModalOpen: isAnyGraphemeOpen,
    });
  },

  closeAllGraphemeModals: () => {
    set({
      graphemes: [],
      currentGrapheme: null,
      isGraphemeModalOpen: false,
    });
  },
}));
