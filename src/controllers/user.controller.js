import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req,res) => {
    // get user detail from frontend
    // validation - not empty
    // check if user already exist : username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refreshToken field
    // check for user creation 
    // return response

    const {fullname,email,username,password} = req.body
    console.log(email);
})


export { registerUser } 