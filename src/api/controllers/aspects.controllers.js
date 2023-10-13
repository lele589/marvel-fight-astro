import { Aspect } from "../database/db.js";

const getAspectsList = async () => {
  try {
    const aspects = await Aspect.findAll();
    return new Response(JSON.stringify(aspects), {
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

export const aspectsController = {
  getAspectsList,
};
