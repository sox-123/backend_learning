import { Router } from "express";
import {    loginUser,
            registerUser,
            logoutUser, 
            refreshAccessToken,
            changeCurrentPassword,
            updateAccountDetails,
            updateUserAvatar,
            updateUserCoverImage,
            getCurrentUser,
            getUserChannelProfile
             
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
router.route("/current-account").get(verifyJWT, getCurrentUser)
router.route("/update-profile").patch(verifyJWT, updateAccountDetails)

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:usename").get(verifyJWT, getUserChannelProfile)


export default router;