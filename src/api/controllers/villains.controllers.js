import { Villain } from "../database/db.js";

const getVillainsList = async () => {
  try {
    const villains = await Villain.findAll();
    return new Response(JSON.stringify(villains), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: true, code: "", message: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

const getVillainById = async (params) => {
  try {
    const villainId = params.id;
    const villain = await Villain.findOne({
      where: { villain_id: villainId },
    });
    if (!villain) {
      return new Response(
        JSON.stringify({ error: `El villano con ID:${villainId} no existe` }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(JSON.stringify(villain), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: true, code: "", message: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const villainsController = {
  getVillainsList,
  getVillainById,
};
