import mongoose, {Schema} from "mongoose";
import { type } from "node:os";
import { ref } from "node:process";

const likeSchema = new Schema(
    {
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet"
        }
    },
    {timestamps: true}
)

export const Like = mongoose.model("Like", likeSchema)