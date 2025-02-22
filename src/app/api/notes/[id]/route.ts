import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
// import Note from "@/models/Note"
import Note from "../../../../../models/Note"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const note = await Note.findById(params.id).populate("userId", "name")
  if (note) {
    return NextResponse.json(note)
  }
  return NextResponse.json({ error: "Note not found" }, { status: 404 })
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const updateData = await req.json()
  const updatedNote = await Note.findByIdAndUpdate(params.id, updateData, { new: true })
  if (updatedNote) {
    return NextResponse.json(updatedNote)
  }
  return NextResponse.json({ error: "Note not found" }, { status: 404 })
}

