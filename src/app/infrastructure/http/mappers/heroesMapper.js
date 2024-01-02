export const mapHeroesFromAPI = (heroesFromAPI) => {
  const heroes = heroesFromAPI.map((hero) => {
    return {
      id: hero.hero_id,
      pack_code: hero.hero_pack_code,
      name: hero.hero_name,
      thumb: hero.hero_thumb,
    };
  });

  return heroes;
};
