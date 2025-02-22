import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Note from "../../../../models/Note"

export async function GET() {
  await dbConnect()
  const notes = await Note.find().populate("userId", "name")
  return NextResponse.json(notes)
}

export async function POST(req: Request) {
  await dbConnect()
  const noteData = await req.json()
  const newNote = new Note(noteData)
  await newNote.save()
  return NextResponse.json(newNote)
}

