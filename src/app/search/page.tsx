import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import connectToDatabase  from "@/lib/mongodb"
import Note from "../../../models/Note"

async function getNotes() {
  await connectToDatabase()
  const notes = await Note.find().limit(10)
  return notes;
}

export default async function SearchPage() {
  const notes = await getNotes()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note: any) => (
          <Card key={note._id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
              <CardDescription>
                {note.faculty} - {note.course}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Module: {note.module}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
                <Link href={`/notes/${note._id}`}>View</Link>
              </Button>
              <div className="flex items-center">
                {/* Star rating component would go here */}
                <span className="ml-2">{note.rating || "No ratings yet"}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

