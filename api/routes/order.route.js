import express from "express";
import { getOder , createOrder } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";


const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOder);


export default router;
