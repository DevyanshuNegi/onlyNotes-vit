import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    courseCode: {
      type: String,
      // required: true,
    },
    facultyID: {
      type: String,
      required: true,
    },
    userId: {
      type: String, // 🔥 Change from ObjectId to String
      required: true,
      ref: "User", // Still keep the reference for population
    },
    fileUrl: {
      type: String,
      required: true,
    },
    // module: {
    //   type: Number,
    //   required: true,
    // },
    comments: [
      {
        userId: {
          type: String,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
      },
    ],
  },
  { timestamps: true },
)

NoteSchema.virtual("averageRating").get(function () {
  if (this.ratings.length === 0) return 0
  const sum = this.ratings.reduce((total, rating) => total + rating.rating, 0)
  return sum / this.ratings.length
})

export default mongoose.models.Note || mongoose.model("Note", NoteSchema)

