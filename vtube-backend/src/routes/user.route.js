import { Router } from "express";
import { registerUser } from "../contollers/user.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      title: "avatar",
      maxCount: 1,
    },
    {
      title: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
