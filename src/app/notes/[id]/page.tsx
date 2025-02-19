import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// In a real application, this data would come from a database query
const noteDetails = {
  id: 1,
  title: "Introduction to Psychology",
  faculty: "Social Sciences",
  course: "Psychology",
  module: "Psychology 101",
  description: "Comprehensive notes covering the basics of psychology, including key theories and concepts.",
  uploader: "John Doe",
  uploadDate: "2023-05-15",
  rating: 4.5,
  downloads: 1250,
}

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{noteDetails.title}</CardTitle>
          <CardDescription>
            {noteDetails.faculty} - {noteDetails.course} - {noteDetails.module}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{noteDetails.description}</p>
          <p>
            Uploaded by: {noteDetails.uploader} on {noteDetails.uploadDate}
          </p>
          <p>Downloads: {noteDetails.downloads}</p>
          <div className="mt-4">
            {/* PDF preview would go here */}
            <div className="bg-gray-200 h-96 flex items-center justify-center">PDF Preview Placeholder</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Download</Button>
          <div className="flex items-center">
            {/* Star rating component would go here */}
            <span className="ml-2">{noteDetails.rating} (120 ratings)</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

