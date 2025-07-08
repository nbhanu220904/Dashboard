import { Router } from "express";
import {
  postBusinessData,
  getRegenerateHeadline,
} from "../controllers/businessController.js";

const router = Router();

router.post("/business-data", postBusinessData);
router.get("/regenerate-headline", getRegenerateHeadline);

export default router;
