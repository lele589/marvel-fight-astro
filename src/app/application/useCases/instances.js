import { HeroesRepository } from "../../infrastructure/http/HeroesRepository";
import { SearchHeroesUseCaseQuery } from "./SearchHeroesUseCaseQuery";

export const useCases = {
  get searchHeroes() {
    return SearchHeroesUseCaseQuery({
      heroesRepository: HeroesRepository(),
    }).execute;
  },
};
