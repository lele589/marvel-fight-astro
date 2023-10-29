import { Encounter } from "../database/db.js";

const getEncountersList = async () => {
  try {
    const encounters = await Encounter.findAll();
    return new Response(JSON.stringify(encounters), {
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

export const encountersController = {
  getEncountersList,
};
