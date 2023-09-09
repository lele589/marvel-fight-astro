import dotenv from "dotenv";
dotenv.config();

import Sequelize from "sequelize";

import UserModel from "../models/users.js";
import HeroModel from "../models/heroes.js";
import VillainModel from "../models/villains.js";
import AspectModel from "../models/aspects.js";
import EncounterModel from "../models/encounters.js";
import GameModeModel from "../models/game_modes.js";
import GameModel from "../models/games.js";

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

const User = UserModel(db, Sequelize);
const Hero = HeroModel(db, Sequelize);
const Villain = VillainModel(db, Sequelize);
const Aspect = AspectModel(db, Sequelize);
const Encounter = EncounterModel(db, Sequelize);
const GameMode = GameModeModel(db, Sequelize);
const Game = GameModel(db, Sequelize);

// Comentado porque se sincronizan las tablas a través de migraciones, si se quiere sincronizar con 'npm run start', descomentar esto
/* db.sync({ force: false }).then(() => {
  console.log('TABLAS SINCRONIZADAS')
}) */

export { User, Hero, Villain, Aspect, Encounter, GameMode, Game };
