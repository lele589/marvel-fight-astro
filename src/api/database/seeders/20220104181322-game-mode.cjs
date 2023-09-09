module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "game_modes",
      [
        {
          game_mode_pack_code: "MC01",
          game_mode_type: "normal",
          game_mode_name: "Normal",
          game_mode_order: 1,
        },
        {
          game_mode_pack_code: "MC01",
          game_mode_type: "normal",
          game_mode_name: "Normal II",
          game_mode_order: 2,
        },
        {
          game_mode_pack_code: "MC24",
          game_mode_type: "expert",
          game_mode_name: "Experto",
          game_mode_order: 3,
        },
        {
          game_mode_pack_code: "MC24",
          game_mode_type: "expert",
          game_mode_name: "Experto II",
          game_mode_order: 4,
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("gameMode", [
      { game_mode_name: "Normal" },
      { game_mode_name: "Normal II" },
      { game_mode_name: "Experto" },
      { game_mode_name: "Experto II" },
    ]);
  },
};
