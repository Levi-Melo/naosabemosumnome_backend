import { Router } from "express";
import { controllers } from "../controllers/classController";

const router = Router();

router.post("/", controllers.createController);

router.get("/:id", controllers.getByIdController);

router.get("/", controllers.filterController);

router.post("/:id", controllers.activeController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as ClassRoutes };
