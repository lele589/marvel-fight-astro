const ERRORS = {
  UNEXPECTED: "UNEXPECTED",
};

export const SearchHeroesUseCaseQuery = ({ heroesRepository }) => {
  return {
    execute: async () => {
      const context = "[USE_CASE/SEARCH_HEROES]";

      try {
        const { data } = await heroesRepository.search();
        return { success: true, data };
      } catch (error) {
        const errorMessage = "Unexpected error";
        return {
          success: false,
          error: {
            type: ERRORS.UNEXPECTED,
            message: `${context} ${errorMessage}`,
          },
        };
      }
    },
  };
};
