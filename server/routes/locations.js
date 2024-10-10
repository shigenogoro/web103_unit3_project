import express from "express"; 
import locationsController from "../controllers/locations.js";

const router = express.Router(); 

router.get("/", locationsController.fetchLocations)

router.get("/:location", locationsController.fetchResourcesByLocation); 

export default router; 