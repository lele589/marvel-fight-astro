import { create } from "zustand";

export const useAddGameFormStore = create((set) => ({
  // TODO: definir el tipo de los datos
  activeStep: 1,
  game: {
    hero: "",
    aspect: "",
    villain: "",
    encounter: "",
    gameMode: "",
    date: null,
    isWin: false,
    deckUrl: "",
  },
  setActiveStep: (newStep) => set({ activeStep: newStep }),
  setGameData: (newGameInformation) =>
    set((state) => ({
      game: { ...state.game, ...newGameInformation },
    })),
}));
