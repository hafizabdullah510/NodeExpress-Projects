import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Connection from "./DB/db.js";
import routes from "./Routes/routes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT;
const password = process.env.password;
app.use("/api", routes);
app.use("/edit", routes);

Connection(password);
app.listen(PORT, () => console.log(`Server is Listening to port ${PORT}`));
