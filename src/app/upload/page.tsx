"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { uploadFile } from "@/lib/cloudinary"
import { getFacultyByName, searchFaculty } from "@/lib/data/FacultiesData"
import { searchCourse } from "@/lib/data/CoursesData"

export default function UploadPage() {
  // TODO: Replace this with actull session management
  const { data: session } = useSession()
  const router = useRouter()
  const [facultySearch, setFacultySearch] = useState("")
  const [courseSearch, setCourseSearch] = useState("")
  const [selectedFaculty, setSelectedFaculty] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [module, setModule] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const [filteredFaculties, setFilteredFaculties] = useState<string[]>([])
  const [filteredCourses, setFilteredCourses] = useState<any[]>([])

  useEffect(() => {
    setFilteredFaculties(searchFaculty(facultySearch))
    // setFilteredFaculties(Faculties.filter((faculty) => faculty.toLowerCase().includes(facultySearch.toLowerCase())))
  }, [facultySearch])

  useEffect(() => {
    // TODO: Maybe in future
    // if (selectedFaculty) {
    //   const courses = getCoursesByFaculty(selectedFaculty)
    //   setFilteredCourses(
    //     courses.filter(
    //       (course) =>
    //         course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
    //         course.code.toLowerCase().includes(courseSearch.toLowerCase()),
    //     ),
    //   )
    // }
    setFilteredCourses(searchCourse(courseSearch))
  }, [courseSearch])


  const handleFacultySelect = (faculty: string) => {
    setSelectedFaculty(faculty)
    setFacultySearch(faculty)
    // setFilteredFaculties([]);
    // setCourseSearch("")
    // setSelectedCourse("")
  }
  // Close dropdown when faculty is selected
  useEffect(() => {
    if (selectedFaculty) {
      setFilteredFaculties([]);
    }
  }, [selectedFaculty]);
  
  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course.code)
    setCourseSearch(`${course.name} (${course.code})`)
    // setFilteredCourses([]);
  }

  // Close dropdown when course is selected
  useEffect(() => {
    if (selectedCourse) {
      setFilteredCourses([]);
    }
  }, [selectedCourse]);

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

try {
  const tempfaculty = getFacultyByName(selectedFaculty);
  const facultyID = tempfaculty ? tempfaculty._id : undefined;
  const url = await uploadFile(file);
  const noteData = {
    title,
    description,
    courseCode: selectedCourse,
    facultyID,
    // fileUrl: cloudinaryData.secure_url,
    fileUrl: url,
    userId: session.user?.email || undefined,
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
        <div className="relative">
          <Label htmlFor="faculty">Faculty</Label>
          <Input
            id="faculty"
            value={facultySearch}
            onChange={(e) => setFacultySearch(e.target.value)}
            placeholder="Search for a faculty"
          />
          {filteredFaculties.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-auto">
              {filteredFaculties.map((faculty) => (
                <li
                  key={faculty}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFacultySelect(faculty)}
                >
                  {faculty}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <Label htmlFor="course">Course</Label>
          <Input
            id="course"
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
            placeholder="Search for a course"
            // disabled={!selectedFaculty}
          />
          {filteredCourses.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-auto">
              {filteredCourses.map((course) => (
                <li
                  key={course.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCourseSelect(course)}
                >
                  {course.name} ({course.code})
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* TODO: Also implement module functionality */}
        {/* <div>
          <Label htmlFor="module">Module Number</Label>
          <Input
            id="module"
            value={module}
            onChange={(e) => setModule(e.target.value)}
            placeholder="1"
          />
        </div> */}
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
        <div>
          <Label htmlFor="file">Upload File</Label>
          <Input
            id="file"
            type="file"
            accept=".pdf,.docx,.txt,.jpg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <Button type="submit" className="w-full">
          Upload Notes
        </Button>
      </form>
    </div>
  )
}

