module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "games",
      [
        {
          game_user_id: 1,
          game_hero_id: 3,
          game_aspect_id: 2,
          game_villain_id: 2,
          game_encounter_id: 2,
          game_gamemode_id: 1,
          game_deck_url: "https://es.marvelcdb.com/deck/view/239528",
          game_date: new Date(),
          game_is_win: false,
          game_is_campaign: false,
          game_is_multiplayer: false,
          game_created_at: new Date(),
          game_updated_at: new Date(),
        },
        {
          game_user_id: 1,
          game_hero_id: 2,
          game_aspect_id: 2,
          game_villain_id: 2,
          game_encounter_id: 7,
          game_gamemode_id: 3,
          game_deck_url: "https://es.marvelcdb.com/deck/view/239528",
          game_date: new Date(),
          game_is_win: true,
          game_is_campaign: true,
          game_is_multiplayer: true,
          game_created_at: new Date(),
          game_updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("games", [
      {
        game_user_id: 1,
        game_hero_id: 3,
        game_aspect_id: 2,
        game_villain_id: 2,
        game_encounter_id: 2,
        game_gamemode_id: 1,
      },
      {
        game_user_id: 1,
        game_hero_id: 2,
        game_aspect_id: 2,
        game_villain_id: 2,
        game_encounter_id: 7,
        game_gamemode_id: 3,
      },
    ]);
  },
};
