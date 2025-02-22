import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    accessToken: { 
      type: String,
      required: false,
    },
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model("User", UserSchema)

