import {
  login,
  logout,
  register,
  verifyEmail,
} from "../Controller/authController.js";
import express from "express";
const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);
routes.get("/logout", logout);
routes.post("/verify-email", verifyEmail);

export default routes;
