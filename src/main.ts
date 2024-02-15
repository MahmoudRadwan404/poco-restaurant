import { connection } from "./database/connection";
import dotenv from "dotenv";
import "./routes";
dotenv.config();
connection();
