import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Menu.module.css'
import { addNote, getNotes, delNote, renameNote } from '../notes.js'
import Dialog from './dialog.jsx'

function Menu() {
  const nav = useNavigate()
  const [list, setList] = useState(getNotes())
  const [dialogshow, setdialogshow] = useState(false)
  const [currentNote, setcurrentNote] = useState(null)
  
  const handleAddNote = () => {
    setdialogshow("create")
  }
  const handlePopup = (noteid) => {
    setcurrentNote(noteid)
    setdialogshow("popup")
  }
  const addNotefunc = (params) => {
    setdialogshow(false)
    addNote(params)
  }
  const handleDeleteNote = () => {
    if (currentNote) {
      setdialogshow("delete")
    }
  }
  const handleConfirmDelete = () => {
    if (currentNote) {
      delNote(currentNote)
      setdialogshow(false)
      setcurrentNote(null)
      setList(getNotes())
    }
  }
  const handleConfirmRename = (newName) => {
    if (currentNote) {
      renameNote(currentNote, newName)
      setdialogshow(false)
      setcurrentNote(null)
      setList(getNotes())
    }
  }
  const handleRenameNote = () => {
    if (currentNote) {
      setdialogshow("rename")
    }
  }
  const closeDialog = () => {
    setdialogshow(false)
  }
  const openNote = (note) => {
    nav(`Note/${note}`)
  }
  return (<>
    {dialogshow ? (
      <Dialog
        type={dialogshow}
        notefunc={addNotefunc}
        noteid={currentNote}
        onDelete={handleDeleteNote}
        onConfirmDelete={handleConfirmDelete}
        onConfirmRename={handleConfirmRename}
        onRename={() => setdialogshow("rename")}
        onCancel={closeDialog}
      />
    ) : null}
    <div className={styles.center}>
      <h3 className={styles.title}>NoteDo</h3>
      </div>
      <div className={styles.list}>
        {list.map((item) => {
        return <div className={styles.note} key={item.id} onClick={() => openNote(item.id)}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
            <button onClick={(e) => {
              handlePopup(item.id)
              e.stopPropagation()
            }}>⋮</button>
          </div>
        })}
        </div>
        <div className={styles.center}><button onClick={handleAddNote}>+</button></div>
        </>)
}

export default Menu