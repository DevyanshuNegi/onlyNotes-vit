import { sampleNotes } from "../sampleData"

export const addRating = (noteId: string, userId: string, rating: number) => {
  const note = sampleNotes.find((note) => note.id === noteId)
  if (note) {
    const existingRatingIndex = note.ratings.findIndex((r) => r.userId === userId)
    if (existingRatingIndex !== -1) {
      note.ratings[existingRatingIndex].rating = rating
    } else {
      note.ratings.push({ userId, rating })
    }
    return calculateAverageRating(note)
  }
  return null
}

export const calculateAverageRating = (note: any) => {
  const totalRating = note.ratings.reduce((sum: number, r: any) => sum + r.rating, 0)
  return totalRating / note.ratings.length
}

