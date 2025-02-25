"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Faculties, getCoursesByFaculty } from "@/lib/data"

export default function SearchPage() {
  const [notes, setNotes] = useState<any[]>([])
  const [facultySearch, setFacultySearch] = useState("")
  const [courseSearch, setCourseSearch] = useState("")
  const [selectedFaculty, setSelectedFaculty] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [filteredFaculties, setFilteredFaculties] = useState<string[]>([])
  const [filteredCourses, setFilteredCourses] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, [])

  useEffect(() => {
    setFilteredFaculties(Faculties.filter((faculty) => faculty.toLowerCase().includes(facultySearch.toLowerCase())))
  }, [facultySearch])

  useEffect(() => {
    if (selectedFaculty) {
      const courses = getCoursesByFaculty(selectedFaculty)
      setFilteredCourses(
        courses.filter(
          (course) =>
            course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
            course.code.toLowerCase().includes(courseSearch.toLowerCase()),
        ),
      )
    }
  }, [courseSearch, selectedFaculty])

  const handleFacultySelect = (faculty: string) => {
    setSelectedFaculty(faculty)
    setFacultySearch(faculty)
    setCourseSearch("")
    setSelectedCourse("")
  }

  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course.code)
    setCourseSearch(`${course.name} (${course.code})`)
  }

  const filteredNotes = notes.filter((note) => {
    if (selectedFaculty && note.course.faculty !== selectedFaculty) return false
    if (selectedCourse && note.courseCode !== selectedCourse) return false
    return true
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Notes</h1>
      <div className="mb-8 space-y-4">
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
            disabled={!selectedFaculty}
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note: any) => (
          <Card key={note._id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
              <CardDescription>
                {note.course.name} ({note.courseCode})
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Faculty: {note.course.faculty}</p>
              <p>Teacher: {note.teacher.name}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
                <Link href={`/notes/${note._id}`}>View</Link>
              </Button>
              <div className="flex items-center">
                <span className="ml-2">Rating: {note.averageRating.toFixed(1) || "No ratings yet"}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

