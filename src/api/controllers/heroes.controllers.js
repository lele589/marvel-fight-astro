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
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

// TODO: refactor
const createHero = async (request) => {
  try {
    const newHero = await Hero.create(request.body);
    return new Response(JSON.stringify(newHero), {
      status: 201,
      body: {
        success: "Se ha creado el héroe",
        user: newHero,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // return res.status(error.status).json({ error: error.message });
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
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

// TODO: refactor
const editHeroById = async (req, res) => {
  try {
    const updatedHero = await Hero.update(req.body, {
      where: { hero_id: req.query.hero_id },
    });
    if (!updatedHero) {
      return res.status(404).json({ error: "El héroe no existe" });
    }
    return res.status(200).json({
      success: "Se ha editado el héroe",
      user: updatedHero,
    });
  } catch (error) {
    console.error(error);
    return res.status(error.status).json({ error: error.message });
  }
};

// TODO: refactor
const deleteHeroById = async (req, res) => {
  try {
    const deletedHero = await Hero.destroy({
      where: { hero_id: req.query.hero_id },
    });
    if (!deletedHero) {
      return res.status(404).json({ error: "El héroe no existe" });
    }
    return res.status(200).json({
      success: "Se ha borrado el héroe",
      user: deletedHero,
    });
  } catch (error) {
    console.error(error);
    return res.status(error.status).json({ error: error.message });
  }
};

export const heroesController = {
  getHeroesList,
  getHeroById,
  createHero,
  editHeroById,
  deleteHeroById,
};
