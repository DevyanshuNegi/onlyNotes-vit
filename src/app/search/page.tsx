import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// In a real application, this data would come from a database query
const searchResults = [
  {
    id: 1,
    title: "Introduction to Psychology",
    faculty: "Social Sciences",
    course: "Psychology",
    module: "Psychology 101",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Organic Chemistry Basics",
    faculty: "Science",
    course: "Chemistry",
    module: "Organic Chemistry",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Linear Algebra and Its Applications",
    faculty: "Science",
    course: "Mathematics",
    module: "Linear Algebra",
    rating: 4.8,
  },
]

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((note) => (
          <Card key={note.id}>
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
                <Link href={`/notes/${note.id}`}>View</Link>
              </Button>
              <div className="flex items-center">
                {/* Star rating component would go here */}
                <span className="ml-2">{note.rating} (120 ratings)</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

