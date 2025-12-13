import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MDEditor, { commands, EditorContext } from "@uiw/react-md-editor"
import { getNote, setContent } from '../notes.js'
import styles from './Note.module.css'

function Note(props) {
  const { noteid } = useParams()
  const nav = useNavigate()
  const note = getNote(noteid)
  const [content, setCont] = useState(note.content)
  const [editmode, setMode] = useState(false)
  const setValue = (value) => {
    setCont(value)
    setContent(note.id, value)
  }
  return (<>
    <div className={styles.toolBar}>
      <h1 className={styles.noteName}>{note.name}</h1>
      <p>{note.desc}</p>
      <button onClick={() => setMode(!editmode)}>{editmode ? "Preview": "Editor"}</button>
    </div>
    <div className={styles.editor}>
      {editmode ? <MDEditor value={content} preview="edit" onChange={setValue} extraCommands={[commands.fullscreen]} />:
      <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />}
    </div>
  </>)
}

export default Note