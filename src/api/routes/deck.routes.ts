import { createDeckController, findDeckByDeckIdController, findDecksByUserController, updateDeckController } from "@controllers/index";
import jwtValidationMiddleware from "@middlewares/jwt.middelare";
import validatorSchema from "@middlewares/validator.middleware";
import { createDeckValidator, findDeckByDeckIdValidator, findDecksByUserIdValidator, updateDeckValidator } from "@validators/deck.validator";
import { Router } from "express";

const router = Router();

router.post("/", [jwtValidationMiddleware, validatorSchema(createDeckValidator)], createDeckController);

router.put("/:deckId", [jwtValidationMiddleware, validatorSchema(updateDeckValidator)], updateDeckController);

router.get("/user/:userId", [jwtValidationMiddleware, validatorSchema(findDecksByUserIdValidator)], findDecksByUserController);

router.get("/:deckId", [jwtValidationMiddleware, validatorSchema(findDeckByDeckIdValidator)], findDeckByDeckIdController);

export default router;