import { Router } from "express";
import DepositController from "../controllers/DepositController";
import { auth } from "../middleware/auth";
import getUserAccount from "../middleware/getUserAccount";

const DepositRoutes = Router();

DepositRoutes.post("/deposit", auth, getUserAccount, DepositController);

export default DepositRoutes;
