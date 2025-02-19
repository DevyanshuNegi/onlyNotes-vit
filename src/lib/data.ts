export const Faculties = ["Arts and Humanities", "Science", "Engineering", "Social Sciences", "Business", "Medicine"]

export const Courses = ["English Literature", "Physics", "Computer Science", "Psychology", "Economics", "Biology"]

export const getModules = (course: string) => {
  // In a real application, this would be fetched from a database
  // For this MVP, we'll return 6 dummy modules for each course
  return Array.from({ length: 6 }, (_, i) => `${course} Module ${i + 1}`)
}

