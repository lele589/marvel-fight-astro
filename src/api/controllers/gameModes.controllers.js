import { GameMode } from "../database/db.js";

const getGameModesList = async () => {
  try {
    const gameModes = await GameMode.findAll();
    return new Response(JSON.stringify(gameModes), {
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

export const gameModesController = {
  getGameModesList,
};
