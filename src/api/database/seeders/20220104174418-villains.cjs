module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "villains",
      [
        {
          villain_pack_code: "MC01",
          villain_name: "Rino",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC01",
          villain_name: "Klaw",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC01",
          villain_name: "Ultron",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC02",
          villain_name: "Duende Verde (Fórmula mutagénica)",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC02",
          villain_name: "Duende Verde (Negocios arriesgados)",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC03",
          villain_name: "Brigada de Demolición",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC10",
          villain_name: "Calavera",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC10",
          villain_name: "Supervisor",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC10",
          villain_name: "Cráneo Rojo",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC10",
          villain_name: "Zola",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC10",
          villain_name: "Hombre Absorbente",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC11",
          villain_name: "Kang",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC11",
          villain_name: "Kang (Experto)",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC16",
          villain_name: "Drang",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC16",
          villain_name: "El Coleccionista (Infiltrados en el museo)",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC16",
          villain_name: "El Coleccionista (Huída del museo)",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC16",
          villain_name: "Nébula",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC16",
          villain_name: "Ronan el Acusador",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC21",
          villain_name: "Fauces Negras",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC21",
          villain_name: "Medianoche Próxima + Corvus Glaive",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC21",
          villain_name: "Hela",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC21",
          villain_name: "Loki",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC21",
          villain_name: "Thanos",
          villain_thumb: "",
        },
        {
          villain_pack_code: "MC24",
          villain_name: "El Encapuchado",
          villain_thumb: "",
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("villains", [
      { villain_name: "Rino" },
      { villain_name: "Klaw" },
      { villain_name: "Ultron" },
      { villain_name: "Duende Verde (Fórmula mutagénica)" },
      { villain_name: "Duende Verde (Negocios arriesgados)" },
      { villain_name: "Brigada de Demolición" },
      { villain_name: "Calavera" },
      { villain_name: "Supervisor" },
      { villain_name: "Cráneo Rojo" },
      { villain_name: "Zola" },
      { villain_name: "Hombre Absorbente" },
      { villain_name: "Kang" },
      { villain_name: "Kang (Experto)" },
      { villain_name: "Drang" },
      { villain_name: "El Coleccionista (Infiltrados en el museo)" },
      { villain_name: "El Coleccionista (Huída del museo)" },
      { villain_name: "Nébula" },
      { villain_name: "Ronan el Acusador" },
      { villain_name: "Fauces Negras" },
      { villain_name: "Medianoche Próxima + Corvus Glaive" },
      { villain_name: "Hela" },
      { villain_name: "Loki" },
      { villain_name: "Thanos" },
      { villain_name: "El Encapuchado" },
    ]);
  },
};
