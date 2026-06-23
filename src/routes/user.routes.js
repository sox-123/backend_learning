import { Router } from "express";
import {    loginUser,
            registerUser,
            logoutUser, 
            refreshAccessToken,
            changeCurrentPassword,
            updateAccountDetails,
            updateUserAvatar,
            updateUserCoverImage,
            getCurrentUser
             
        } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1,
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)


//secured Routes

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-account").post(verifyJWT, getCurrentUser)
router.route("/update-profile").post(verifyJWT, updateAccountDetails)

router.route("/avatar").post(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").post(verifyJWT, upload.single("coverImage"), updateUserCoverImage)


export default router;