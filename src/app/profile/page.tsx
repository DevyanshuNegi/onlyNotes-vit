import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// In a real application, this data would come from a database query
const userNotes = [
  { id: 1, title: "Introduction to Psychology", downloads: 1250, rating: 4.5 },
  { id: 2, title: "Organic Chemistry Basics", downloads: 890, rating: 4.2 },
  { id: 3, title: "Linear Algebra and Its Applications", downloads: 1500, rating: 4.8 },
]

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <Tabs defaultValue="uploaded">
        <TabsList>
          <TabsTrigger value="uploaded">Uploaded Notes</TabsTrigger>
          <TabsTrigger value="downloaded">Downloaded Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="uploaded">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userNotes.map((note) => (
              <Card key={note.id}>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>Downloads: {note.downloads}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Rating: {note.rating}</p>
                </CardContent>
                <CardFooter>
                  <Button>Edit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="downloaded">
          <p>Downloaded notes will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

