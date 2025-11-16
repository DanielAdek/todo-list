import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "5443",
  database: "todo_list_db",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/../entities/*.js"],
});

export default AppDataSource;
