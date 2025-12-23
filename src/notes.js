import { v4 as uuidv4 } from 'uuid'

let noteslist = []
const STORAGE_KEY = 'notedo-saves'

function loadNotes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      noteslist = JSON.parse(saved)
    } catch (e) {
      console.error('Ошибка при чтении заметок из localStorage', e)
      noteslist = []
    }
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(noteslist));
}

loadNotes();

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
  saveNotes()
  return [...noteslist]
}
export function setContent(id, content) {
  const note = noteslist.find(note => note.id === id)
  if (note) {
    note.content = content
    saveNotes()
  }
}

export function renameNote(id, newName) {
  const note = noteslist.find(note => note.id === id)
  if (note) {
    note.name = newName.trim() || "Unnamed note"
    saveNotes()
  }
  return [...noteslist]
}

export function setDescription(id, newDesc) {
  const note = noteslist.find(note => note.id === id)
  if (note) {
    note.desc = newDesc.trim() || "No description"
    saveNotes()
  }
  return [...noteslist]
}

export function delNote(id) {
  const index = noteslist.findIndex(note => note.id === id)
  if (index !== -1) {
    noteslist.splice(index, 1)
    saveNotes()
  }
  return [...noteslist]
}