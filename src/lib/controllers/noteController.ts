import { sampleNotes } from "../sampleData"
import { getCourseByCode, getTeacherById } from "../data"

export const getNotes = () => {
  return sampleNotes.map((note) => ({
    ...note,
    course: getCourseByCode(note.courseCode),
    teacher: getTeacherById(note.teacherId),
  }))
}

export const getNoteById = (id: string) => {
  const note = sampleNotes.find((note) => note.id === id)
  if (note) {
    return {
      ...note,
      course: getCourseByCode(note.courseCode),
      teacher: getTeacherById(note.teacherId),
    }
  }
  return null
}

export const addNote = (noteData: any) => {
  const newNote = {
    id: (sampleNotes.length + 1).toString(),
    ...noteData,
    createdAt: new Date(),
    comments: [],
    ratings: [],
  }
  sampleNotes.push(newNote)
  return newNote
}

export const updateNote = (id: string, updateData: any) => {
  const noteIndex = sampleNotes.findIndex((note) => note.id === id)
  if (noteIndex !== -1) {
    sampleNotes[noteIndex] = { ...sampleNotes[noteIndex], ...updateData }
    return sampleNotes[noteIndex]
  }
  return null
}

