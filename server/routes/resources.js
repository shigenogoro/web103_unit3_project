import express from "express";
import resourcesController from "../controllers/resources.js";

const router = express.Router(); 

router.get("/", resourcesController.fetchResources); 

router.get("/:id", resourcesController.fetchResourceById);

export default router; 