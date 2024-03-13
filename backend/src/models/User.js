import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    presense: { type: String },
    fullName: { type: String, required: true },
    age: { type: Number },
    pairName: { type: String },
    parent: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model("User", UserSchema)
