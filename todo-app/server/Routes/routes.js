import express from "express";
import {
  createTodo,
  getAllTodos,
  getSingleUser,
  editTodo,
  deleteTodo,
} from "../controller/controller.js";
const routes = express.Router();

routes.post("/add", createTodo);
routes.get("/all", getAllTodos);
routes.get("/:id", getSingleUser);
routes.put("/:id", editTodo);
routes.delete("/:id", deleteTodo);

export default routes;
