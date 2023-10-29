import { Game } from "../database/db.js";

const getGamesList = async () => {
  try {
    const games = await Game.findAll();
    return new Response(JSON.stringify(games), {
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

const getGameByUserId = async (params) => {
  try {
    const gameUserId = params.userId;
    const game = await Game.findOne({
      where: { game_user_id: gameUserId },
    });
    if (!game) {
      return new Response(
        JSON.stringify({
          error: `El usuario con ID:${gameUserId} no tiene partidas`,
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(JSON.stringify(game), {
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

const createGame = async (request) => {
  try {
    const body = await request.json();
    // TODO: validate body data

    const game = await Game.create(body);
    return new Response(JSON.stringify(game), {
      status: 201,
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

export const gamesController = {
  getGamesList,
  getGameByUserId,
  createGame,
};
