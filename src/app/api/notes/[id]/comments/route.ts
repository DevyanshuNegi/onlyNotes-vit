import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Note from "../../../../../../models/Note"

export async function POST(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const { userId, content } = await req.json()
  const note = await Note.findById(params.id)
  if (note) {
    note.comments.push({ userId, content })
    await note.save()
    return NextResponse.json(note.comments[note.comments.length - 1])
  }
  return NextResponse.json({ error: "Failed to add comment" }, { status: 400 })
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const { commentId, content } = await req.json()
  const note = await Note.findById(params.id)
  if (note) {
    const comment = note.comments.id(commentId)
    if (comment) {
      comment.content = content
      await note.save()
      return NextResponse.json(comment)
    }
  }
  return NextResponse.json({ error: "Failed to update comment" }, { status: 400 })
}

