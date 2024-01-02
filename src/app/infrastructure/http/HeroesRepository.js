import { mapHeroesFromAPI } from "./mappers/heroesMapper";

const API_ERRORS = {
  UNEXPECTED: "UNEXPECTED",
};

export const HeroesRepository = () => {
  return {
    search: async () => {
      const context = "[REPOSITORY/HEROES/SEARCH]";

      try {
        const response = await fetch("/api/heroes");

        if (response.ok) {
          const heroes = await response.json();
          const heroesMapped = mapHeroesFromAPI(heroes);
          return { success: true, data: heroesMapped };
        }

        if (response.error) {
          throw new Error(res.error);
        }
      } catch (error) {
        const errorMessage = "Unexpected error";
        return {
          success: false,
          error: {
            type: API_ERRORS.UNEXPECTED,
            message: `${context} ${errorMessage}`,
          },
        };
      }
    },
  };
};
