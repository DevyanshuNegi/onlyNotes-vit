"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Faculties, Courses, getModules } from "@/lib/data"

export default function UploadPage() {
  const [selectedFaculty, setSelectedFaculty] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [modules, setModules] = useState<string[]>([])

  const handleCourseChange = (course: string) => {
    setSelectedCourse(course)
    setModules(getModules(course))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Notes</h1>
      <form className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label htmlFor="faculty">Faculty</Label>
          <Select onValueChange={setSelectedFaculty}>
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
          <Select onValueChange={handleCourseChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              {Courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="module">Module</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Module" />
            </SelectTrigger>
            <SelectContent>
              {modules.map((module) => (
                <SelectItem key={module} value={module}>
                  {module}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="title">Note Title</Label>
          <Input id="title" placeholder="Enter the title of your notes" />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Provide a brief description of your notes" />
        </div>
        <div>
          <Label htmlFor="file">Upload File</Label>
          <Input id="file" type="file" accept=".pdf,.docx,.txt,.jpg,.png" />
        </div>
        <Button type="submit" className="w-full">
          Upload Notes
        </Button>
      </form>
    </div>
  )
}

