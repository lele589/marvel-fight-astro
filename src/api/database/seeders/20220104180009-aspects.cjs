module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "aspects",
      [
        {
          aspect_type: "aggression",
          aspect_name: "agresividad",
          aspect_color: "#940D14",
        },
        {
          aspect_type: "justice",
          aspect_name: "justicia",
          aspect_color: "#EBB408",
        },
        {
          aspect_type: "protection",
          aspect_name: "protección",
          aspect_color: "#4DA01B",
        },
        {
          aspect_type: "leadership",
          aspect_name: "liderazgo",
          aspect_color: "#239C90",
        },
        {
          aspect_type: "basic",
          aspect_name: "básico",
          aspect_color: "#7A8C88",
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("aspects", [
      { aspect_type: "aggression" },
      { aspect_type: "justice" },
      { aspect_type: "protection" },
      { aspect_type: "leadership" },
      { aspect_type: "basic" },
    ]);
  },
};
