import { Hero } from "../database/db.js";

const getHeroesList = async () => {
  try {
    const heroes = await Hero.findAll();
    return new Response(JSON.stringify(heroes), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error", message: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

const getHeroById = async (params) => {
  try {
    const heroId = params.id;
    const hero = await Hero.findOne({
      where: { hero_id: heroId },
    });
    if (!hero) {
      return new Response(
        JSON.stringify({ error: `El héroe con ID:${heroId} no existe` }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(JSON.stringify(hero), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error", message: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const heroesController = {
  getHeroesList,
  getHeroById,
};
