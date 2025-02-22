import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: String, // Allows _id to be email
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    accessToken: String,
  },
  { timestamps: true }
);

// Automatically set _id to email when saving a new user
UserSchema.pre("save", function (next) {
  if (!this._id) {
    this._id = this.email;
  }
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
