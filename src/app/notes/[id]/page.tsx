"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getCourseByCode, getTeacherById } from "@/lib/data"

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  const { data: session } = useSession()
  const [note, setNote] = useState<any>(null)
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(() => {
    fetch(`/api/notes/${params.id}`)
      .then((res) => res.json())
      .then((data) => setNote(data))
  }, [params.id])

  const handleComment = async () => {
    if (!session) {
      alert("You must be logged in to comment.")
      return
    }

    const res = await fetch(`/api/notes/${params.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session.user?.email, content: comment }),
    })

    if (res.ok) {
      setComment("")
      // Refresh note data
      const updatedNote = await fetch(`/api/notes/${params.id}`).then((res) => res.json())
      setNote(updatedNote)
    }
  }

  const handleRating = async () => {
    if (!session) {
      alert("You must be logged in to rate.")
      return
    }

    const res = await fetch(`/api/notes/${params.id}/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ userId: session.user?.id, rating }),
      body: JSON.stringify({ userId: session.user?.email, rating }),
    })

    if (res.ok) {
      setRating(0)
      // Refresh note data
      const updatedNote = await fetch(`/api/notes/${params.id}`).then((res) => res.json())
      setNote(updatedNote)
    }
  }

  if (!note) {
    return <div>Loading...</div>
  }

  const course = getCourseByCode(note.courseCode)
  const teacher = getTeacherById(note.teacherId)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>
            {course?.name} ({note.courseCode}) - {teacher?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{note.description}</p>
          <p>Uploaded by: {note.userId.name}</p>
          <div className="mt-4">
            <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Note
            </a>
          </div>
          {session && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
              <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your comment..." />
              <Button onClick={handleComment} className="mt-2">
                Submit Comment
              </Button>
            </div>
          )}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            {note.comments && note.comments.length > 0 ? (
              note.comments.map((comment: any, index: number) => (
                <div key={index} className="border-b py-2">
                  <p>{comment.content}</p>
                  <p className="text-sm text-gray-500">By: {comment.userId.name}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {session && (
            <div className="flex items-center">
              <Input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-16 mr-2"
              />
              <Button onClick={handleRating}>Rate</Button>
            </div>
          )}
          <div className="flex items-center">
            <span className="ml-2">Average Rating: {note.averageRating.toFixed(1) || "No ratings yet"}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

