import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      //   type: mongoose.Schema.Types.ObjectId,
      type: String,
      //   ref: "User",
      required: true,
    },
    otherUserId: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
