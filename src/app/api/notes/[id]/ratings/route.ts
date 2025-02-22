import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
// import Note from "@/models/Note"
import Note from "../../../../../../models/Note"

export async function POST(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const { userId, rating } = await req.json()
  const note = await Note.findById(params.id)
  if (note) {
    const existingRatingIndex = note.ratings.findIndex((r: { userId: { toString: () => any } }) => r.userId.toString() === userId)
    if (existingRatingIndex !== -1) {
      note.ratings[existingRatingIndex].rating = rating
    } else {
      note.ratings.push({ userId, rating })
    }
    await note.save()
    return NextResponse.json({ averageRating: note.averageRating })
  }
  return NextResponse.json({ error: "Failed to add rating" }, { status: 400 })
}

