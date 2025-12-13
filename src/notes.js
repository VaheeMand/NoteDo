import { v4 as uuidv4 } from 'uuid'

const noteslist = []

export function getNote(noteid) {
  return noteslist.find(note => note.id === noteid)
}

export function getNotes() {
  return noteslist
}

export function addNote(note) {
  noteslist.push({id: uuidv4(),
    name: note,
    desc: "Description of the note",
    content: "# Welcome to your note!"
  })
  return [...noteslist]
}
export function setContent(id, content) {
  const note = noteslist.find(note => note.id === id)
  if (note) {
    note.content = content
  }
}

export function renameNote(id, newName) {
  const note = noteslist.find(note => note.id === id)
  if (note) {
    note.name = newName.trim() || "Без названия"
  }
  return [...noteslist]
}

export function delNote(id) {
  const index = noteslist.findIndex(note => note.id === id)
  if (index !== -1) {
    noteslist.splice(index, 1)
  }
  return [...noteslist]
}