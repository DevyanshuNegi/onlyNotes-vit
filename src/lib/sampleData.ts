export const sampleNotes = [
  {
    id: "1",
    title: "Introduction to English Literature",
    description: "Comprehensive notes covering the basics of English literature",
    courseCode: "ENG101",
    teacherId: "1",
    userId: "user1",
    fileUrl: "https://example.com/notes/eng101.pdf",
    createdAt: new Date("2023-01-15"),
    comments: [
      { id: "1", userId: "user2", content: "Great notes, thanks for sharing!", createdAt: new Date("2023-01-16") },
      {
        id: "2",
        userId: "user3",
        content: "Very helpful, could you add more examples?",
        createdAt: new Date("2023-01-17"),
      },
    ],
    ratings: [
      { userId: "user2", rating: 5 },
      { userId: "user3", rating: 4 },
    ],
  },
  {
    id: "2",
    title: "Quantum Mechanics Fundamentals",
    description: "Detailed notes on the principles of quantum mechanics",
    courseCode: "PHY201",
    teacherId: "2",
    userId: "user4",
    fileUrl: "https://example.com/notes/phy201.pdf",
    createdAt: new Date("2023-02-01"),
    comments: [
      {
        id: "3",
        userId: "user5",
        content: "These notes saved my life during exams!",
        createdAt: new Date("2023-02-03"),
      },
    ],
    ratings: [
      { userId: "user5", rating: 5 },
      { userId: "user6", rating: 5 },
    ],
  },
]

export const sampleUsers = [
  { id: "user1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "user2", name: "Bob Smith", email: "bob@example.com" },
  { id: "user3", name: "Charlie Brown", email: "charlie@example.com" },
  { id: "user4", name: "Diana Prince", email: "diana@example.com" },
  { id: "user5", name: "Ethan Hunt", email: "ethan@example.com" },
  { id: "user6", name: "Fiona Gallagher", email: "fiona@example.com" },
]

