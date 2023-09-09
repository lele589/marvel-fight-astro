import dotenv from "dotenv";

dotenv.config();

const enviroments = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: process.env.MYSQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: process.env.MYSQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

export default enviroments;
