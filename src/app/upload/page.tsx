"use client"

import type React from "react"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Faculties, getCoursesByFaculty, getTeachersByFaculty } from "@/lib/data"
import { CldImage } from 'next-cloudinary';

import { uploadImage } from '@/lib/cloudinary'

export default function UploadPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [selectedFaculty, setSelectedFaculty] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleFacultyChange = (faculty: string) => {
    setSelectedFaculty(faculty)
    setSelectedCourse("")
    setSelectedTeacher("")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session) {
      alert("You must be logged in to upload notes.")
      return
    }

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData()
    // formData.append("file", file as Blob)
    formData.append("file", file);
    formData.append("upload_preset", "note_sharing_platform")
    console.log("Uploading file:", file)
    try {
      console.log("next public cloud name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        },
      )

      if (!cloudinaryRes.ok) {
        const errorText = await cloudinaryRes.text();
        throw new Error(`Cloudinary error: ${errorText}`);
      }

      const cloudinaryData = await cloudinaryRes.json()
      console.log("Cloudinary data:", cloudinaryData)
      const noteData = {
        title,
        description,
        courseCode: selectedCourse,
        teacherId: selectedTeacher,
        fileUrl: cloudinaryData.secure_url,
        // userId: session.user?.id||undefined,
      }

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      })

      if (res.ok) {
        router.push("/")
      } else {
        throw new Error("Failed to upload note")
      }
    } catch (error) {
      console.error("Error uploading note:", error)
      alert("Failed to upload note. Please try again.")
    }
  }

  if (!session) {
    return <div>Please log in to upload notes.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Notes</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label htmlFor="faculty">Faculty</Label>
          <Select onValueChange={handleFacultyChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Faculty" />
            </SelectTrigger>
            <SelectContent>
              {Faculties.map((faculty) => (
                <SelectItem key={faculty} value={faculty}>
                  {faculty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="course">Course</Label>
          <Select onValueChange={setSelectedCourse}>
            <SelectTrigger>
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              {getCoursesByFaculty(selectedFaculty).map((course) => (
                <SelectItem key={course.code} value={course.code}>
                  {course.name} ({course.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="teacher">Teacher</Label>
          <Select onValueChange={setSelectedTeacher}>
            <SelectTrigger>
              <SelectValue placeholder="Select Teacher" />
            </SelectTrigger>
            <SelectContent>
              {getTeachersByFaculty(selectedFaculty).map((teacher) => (
                <SelectItem key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="title">Note Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your notes"
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a brief description of your notes"
          />
        </div>
        {/* <div>
          <Label htmlFor="file">Upload File</Label>
          <Input
            id="file"
            type="file"
            accept=".pdf,.docx,.txt,.jpg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div> */}
        
        <Button type="submit" className="w-full">
          Upload Notes
        </Button>
      </form>
    </div>
  )
}

