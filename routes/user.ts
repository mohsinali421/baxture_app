import { Router } from "express";
import { getAllUsersController } from "../controllers/getAllUsers";
import { getUserByIdController } from "../controllers/getUserById";
import { saveUserController } from "../controllers/saveUser";
import { updateUserController } from "../controllers/updateUser";
import { deleteUserByIdController } from "../controllers/deleteUserById";
import { deleteAllUserController } from "../controllers/deleteAllUser";
import { JoiSchemaValidator } from "../models/user_validator";

export const router = Router();

router.get("/users", getAllUsersController );

router.get("/users/:userId", getUserByIdController );

router.post("/users", JoiSchemaValidator , saveUserController );

router.put("/users/:userId", updateUserController );

router.delete("/users/:userId", deleteUserByIdController );

router.delete("/users", deleteAllUserController );
