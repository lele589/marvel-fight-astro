import { create } from "zustand";

export const useAddGameFormStore = create((set) => ({
  // TODO: definir el tipo de los datos
  activeStep: 1,
  game: {
    hero: null,
    aspect: null,
    villain: null,
    encounter: null,
    gameMode: null,
    date: null,
    isWin: null,
    deckUrl: null,
  },
  setActiveStep: (newStep) => set({ activeStep: newStep }),
  setGameData: (newGameInformation) =>
    set((state) => ({
      game: { ...state.game, ...newGameInformation },
    })),
}));
