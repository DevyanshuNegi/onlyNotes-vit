import { sampleNotes } from "../sampleData"

export const addComment = (noteId: string, userId: string, content: string) => {
  const note = sampleNotes.find((note) => note.id === noteId)
  if (note) {
    const newComment = {
      id: (note.comments.length + 1).toString(),
      userId,
      content,
      createdAt: new Date(),
    }
    note.comments.push(newComment)
    return newComment
  }
  return null
}

export const updateComment = (noteId: string, commentId: string, content: string) => {
  const note = sampleNotes.find((note) => note.id === noteId)
  if (note) {
    const commentIndex = note.comments.findIndex((comment) => comment.id === commentId)
    if (commentIndex !== -1) {
      note.comments[commentIndex].content = content
      return note.comments[commentIndex]
    }
  }
  return null
}

