export const Faculties = [
  "Arts and Humanities",
  "Science",
  "Engineering",
  "Social Sciences",
  "Business",
  "Medicine",
  // Add more faculties here
]

export const Courses = [
  { code: "ENG101", name: "English Literature", faculty: "Arts and Humanities" },
  { code: "PHY201", name: "Physics", faculty: "Science" },
  { code: "CS301", name: "Computer Science", faculty: "Engineering" },
  { code: "PSY101", name: "Psychology", faculty: "Social Sciences" },
  { code: "ECO201", name: "Economics", faculty: "Business" },
  { code: "BIO101", name: "Biology", faculty: "Science" },
  // Add more courses here
]

export const Teachers = [
  { id: "1", name: "Dr. John Smith", faculty: "Arts and Humanities", courses: ["ENG101"] },
  { id: "2", name: "Prof. Jane Doe", faculty: "Science", courses: ["PHY201", "BIO101"] },
  { id: "3", name: "Dr. Michael Johnson", faculty: "Engineering", courses: ["CS301"] },
  { id: "4", name: "Prof. Sarah Brown", faculty: "Social Sciences", courses: ["PSY101"] },
  { id: "5", name: "Dr. Robert Lee", faculty: "Business", courses: ["ECO201"] },
  // Add more teachers here
]

export const getModules = (courseCode: string) => {
  // In a real application, this would be fetched from a database
  // For this MVP, we'll return 6 dummy modules for each course
  return Array.from({ length: 6 }, (_, i) => `${courseCode} Module ${i + 1}`)
}

export const getCoursesByFaculty = (faculty: string) => {
  return Courses.filter((course) => course.faculty === faculty)
}

export const getTeachersByFaculty = (faculty: string) => {
  return Teachers.filter((teacher) => teacher.faculty === faculty)
}

export const getCourseByCode = (code: string) => {
  return Courses.find((course) => course.code === code)
}

export const getTeacherById = (id: string) => {
  return Teachers.find((teacher) => teacher.id === id)
}

