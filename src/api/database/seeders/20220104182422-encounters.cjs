module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "encounters",
      [
        {
          encounter_pack_code: "MC01",
          encounter_name: "Amenaza de Bomba",
          encounter_difficulty: 1,
        },
        {
          encounter_pack_code: "MC01",
          encounter_name: "Señores del Mal",
          encounter_difficulty: 2,
        },
        {
          encounter_pack_code: "MC01",
          encounter_name: "Civiles en Peligro",
          encounter_difficulty: 3,
        },
        {
          encounter_pack_code: "MC01",
          encounter_name: "Legiones de Hydra",
          encounter_difficulty: 4,
        },
        {
          encounter_pack_code: "MC01",
          encounter_name: "La Silla del Juicio Final",
          encounter_difficulty: 5,
        },
        {
          encounter_pack_code: "MC02",
          encounter_name: "Alta Tensión",
        },
        {
          encounter_pack_code: "MC02",
          encounter_name: "Impedimentos",
        },
        {
          encounter_pack_code: "MC02",
          encounter_name: "Trucos de Duende",
        },
        {
          encounter_pack_code: "MC02",
          encounter_name: "Un Auténtico Estropicio",
        },
        {
          encounter_pack_code: "P&P",
          encounter_name: "Fanático Kree",
        },
        {
          encounter_pack_code: "MC10",
          encounter_name: "Armas Experimentales",
        },
        {
          encounter_pack_code: "MC10",
          encounter_name: "Asalto de Hydra",
        },
        {
          encounter_pack_code: "MC10",
          encounter_name: "Maestro de Armas",
        },
        {
          encounter_pack_code: "MC10",
          encounter_name: "Patrulla de Hydra",
        },
        {
          encounter_pack_code: "MC11",
          encounter_name: "Temporal",
        },
        {
          encounter_pack_code: "MC11",
          encounter_name: "Anacronautas",
        },
        {
          encounter_pack_code: "MC11",
          encounter_name: "Amo del Tiempo",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Gemas del Infinito",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Banda Badoon",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Cazador de Cabezas Badoon",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Artefactos Galácticos",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Militantes Kree",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Bestiario Galáctico",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Nave Espacial",
        },
        {
          encounter_pack_code: "MC16",
          encounter_name: "Piratas Espaciales",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Orden Negra",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Ejércitos de Titán",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Hijos de Thanos",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Guantelete del Infinito",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Legiones de Hel",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Gigantes de Hielo",
        },
        {
          encounter_pack_code: "MC21",
          encounter_name: "Encantadora",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Malas Bestias",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Hermanos Grimm",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Banda de Fuego Cruzado",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Mr.Hyde",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Arsenal Desvalijado",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Sindicato Siniestro",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Estado de Emergencia",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Caos en las calles",
        },
        {
          encounter_pack_code: "MC24",
          encounter_name: "Brigada de Demolición",
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("encounters", [
      { encounter_name: "Amenaza de Bomba" },
      { encounter_name: "Señores del Mal" },
      { encounter_name: "Civiles en Peligro" },
      { encounter_name: "Legiones de Hydra" },
      { encounter_name: "La Silla del Juicio Final" },
      { encounter_name: "Alta Tensión" },
      { encounter_name: "Impedimentos" },
      { encounter_name: "Trucos de Duende" },
      { encounter_name: "Un Auténtico Estropicio" },
      { encounter_name: "Fanático Kree" },
      { encounter_name: "Armas Experimentales" },
      { encounter_name: "Asalto de Hydra" },
      { encounter_name: "Maestro de Armas" },
      { encounter_name: "Patrulla de Hydra" },
      { encounter_name: "Temporal" },
      { encounter_name: "Anacronautas" },
      { encounter_name: "Amo del Tiempo" },
      { encounter_name: "Gemas del Infinito" },
      { encounter_name: "Banda Badoon" },
      { encounter_name: "Cazador de Cabezas Badoon" },
      { encounter_name: "Artefactos Galácticos" },
      { encounter_name: "Militantes Kree" },
      { encounter_name: "Bestiario Galáctico" },
      { encounter_name: "Nave Espacial" },
      { encounter_name: "Piratas Espaciales" },
      { encounter_name: "Orden Negra" },
      { encounter_name: "Ejércitos de Titán" },
      { encounter_name: "Hijos de Thanos" },
      { encounter_name: "Guantelete del Infinito" },
      { encounter_name: "Legiones de Hel" },
      { encounter_name: "Gigantes de Hielo" },
      { encounter_name: "Encantadora" },
      { encounter_name: "Malas Bestias" },
      { encounter_name: "Hermanos Grimm" },
      { encounter_name: "Banda de Fuego Cruzado" },
      { encounter_name: "Mr.Hyde" },
      { encounter_name: "Arsenal Desvalijado" },
      { encounter_name: "Sindicato Siniestro" },
      { encounter_name: "Estado de Emergencia" },
      { encounter_name: "Caos en las calles" },
      { encounter_name: "Brigada de Demolición" },
    ]);
  },
};
