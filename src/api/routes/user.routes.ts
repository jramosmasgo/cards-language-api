import {
  createUserController,
  getUserByIdController,
  updateUserController,
} from "@controllers/user.controller";
import validatorSchema from "@middlewares/validator.middleware";
import {
  createUserValidator,
  getUserValidator,
  updateUserValidator,
} from "@validators/index";
import { Router } from "express";

const router = Router();

router.post("/", validatorSchema(createUserValidator), createUserController);

router.get(
  "/info/:idUser",
  validatorSchema(getUserValidator),
  getUserByIdController
);

router.put(
  "/:idUser",
  validatorSchema(updateUserValidator),
  updateUserController
);

export default router;
