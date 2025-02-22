import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Faculties, Courses } from "@/lib/data"
import dbConnect from "@/lib/dbConnect"

export default async function Home() {
  dbConnect();
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NoteShare</h1>
        <p className="text-xl mb-8">Discover and share university notes with your peers</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Select>
            <SelectTrigger className="w-[200px]">
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
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              {Courses.map((course) => (
                <SelectItem key={course.code} value={course.name}>
                  {course.faculty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input className="w-[300px]" placeholder="Search for notes..." />
          <Button>Search</Button>
        </div>
        <Button asChild>
          <Link href="/upload">Upload Notes</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Notes {"(On Progress ... )"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>On Progress...</CardTitle>
                <CardDescription>Faculty of Social Sciences</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Comprehensive notes covering the basics of psychology...</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View</Button>
                <div className="flex items-center">
                  {/* Star rating component would go here */}
                  <span className="ml-2">4.5 (120 ratings)</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

