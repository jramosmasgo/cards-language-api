import {
  createUserController,
  getUserByIdController,
  loginUserController,
  updateUserController,
} from "@controllers/user.controller";
import jwtValidationMiddleware from "@middlewares/jwt.middelare";
import validatorSchema from "@middlewares/validator.middleware";
import {
  createUserValidator,
  getUserValidator,
  loginUserValidator,
  updateUserValidator,
} from "@validators/index";
import { Router } from "express";

const router = Router();

router.post("/", validatorSchema(createUserValidator), createUserController);

router.post("/login", validatorSchema(loginUserValidator), loginUserController)

router.get(
  "/info/:userId",
  [jwtValidationMiddleware, validatorSchema(getUserValidator)],
  getUserByIdController
);

router.put(
  "/:userId",
  [jwtValidationMiddleware, validatorSchema(updateUserValidator)],
  updateUserController
);

export default router;
