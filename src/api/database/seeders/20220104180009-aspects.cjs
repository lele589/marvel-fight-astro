module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "aspects",
      [
        {
          aspect_type: "aggression",
          aspect_name: "Agresividad",
          aspect_color: "#940D14",
        },
        {
          aspect_type: "justice",
          aspect_name: "Justicia",
          aspect_color: "#EBB408",
        },
        {
          aspect_type: "protection",
          aspect_name: "Protección",
          aspect_color: "#4DA01B",
        },
        {
          aspect_type: "leadership",
          aspect_name: "Liderazgo",
          aspect_color: "#239C90",
        },
        {
          aspect_type: "basic",
          aspect_name: "Básico",
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
