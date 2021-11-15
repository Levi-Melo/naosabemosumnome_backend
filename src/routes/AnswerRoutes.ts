import { Router } from "express";
import { controllers } from "../controllers/answerController";

const router = Router();

router.post("/", controllers.createController);

router.get("/", controllers.filterController);

router.get("/:id", controllers.getByIdController);

router.post("/:id", controllers.activeController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as AnswerRoutes };
