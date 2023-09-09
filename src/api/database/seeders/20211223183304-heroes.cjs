module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "heroes",
      [
        {
          hero_pack_code: "MC01",
          hero_name: "Spiderman",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC01",
          hero_name: "Capitana Marvel",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC01",
          hero_name: "Hulka",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC01",
          hero_name: "Pantera negra",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC01",
          hero_name: "Ironman",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC04",
          hero_name: "Capitán América",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC05",
          hero_name: "Ms. Marvel",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC06",
          hero_name: "Thor",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC07",
          hero_name: "Viuda Negra",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC08",
          hero_name: "Doctor Extraño",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC09",
          hero_name: "Hulk",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC10",
          hero_name: "Ojo de Halcón",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC10",
          hero_name: "Spiderwoman",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC12",
          hero_name: "Hombre Hormiga",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC13",
          hero_name: "Avispa",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC14",
          hero_name: "Quicksilver",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC15",
          hero_name: "Bruja Escarlata",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC16",
          hero_name: "Mapache Cohete",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC16",
          hero_name: "Groot",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC17",
          hero_name: "Star-Lord",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC18",
          hero_name: "Gamora",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC19",
          hero_name: "Drax",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC20",
          hero_name: "Veneno",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC21",
          hero_name: "Spectrum",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC21",
          hero_name: "Adam Warlock",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC22",
          hero_name: "Nebula",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC23",
          hero_name: "Máquina de Guerra",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC24",
          hero_name: "Valkyrie",
          hero_thumb: "",
        },
        {
          hero_pack_code: "MC25",
          hero_name: "Visión",
          hero_thumb: "",
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("heroes", [
      { hero_name: "Spiderman" },
      { hero_name: "Capitana Marvel" },
      { hero_name: "Hulka" },
      { hero_name: "Pantera negra" },
      { hero_name: "Ironman" },
      { hero_name: "Capitán América" },
      { hero_name: "Ms. Marvel" },
      { hero_name: "Thor" },
      { hero_name: "Viuda Negra" },
      { hero_name: "Doctor Extraño" },
      { hero_name: "Hulk" },
      { hero_name: "Ojo de Halcón" },
      { hero_name: "Spiderwoman" },
      { hero_name: "Hombre Hormiga" },
      { hero_name: "Avispa" },
      { hero_name: "Quicksilver" },
      { hero_name: "Bruja Escarlata" },
      { hero_name: "Mapache Cohete" },
      { hero_name: "Groot" },
      { hero_name: "Star-Lord" },
      { hero_name: "Gamora" },
      { hero_name: "Drax" },
      { hero_name: "Veneno" },
      { hero_name: "Spectrum" },
      { hero_name: "Adam Warlock" },
      { hero_name: "Nebula" },
      { hero_name: "Máquina de Guerra" },
      { hero_name: "Valkyrie" },
      { hero_name: "Visión" },
    ]);
  },
};
