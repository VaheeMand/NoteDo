import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getNote, delNote, renameNote, setDescription} from '../notes.js'
import Dialog from '../menu/dialog.jsx'
import styles from './Info.module.css'

function Info() {
  const { noteid } = useParams()
  const nav = useNavigate()
  const note = getNote(noteid)
  
  const [infoName, setName] = useState(note.name)
  const [infoDesc, setDesc] = useState(note.desc)
  const [delPopup, setDelPopup] = useState(false)

  return (<>
    <div className={styles.container}>
      <label>Name: </label>
      <input placeholder="My note" value={infoName} onChange={(e) => setName(e.target.value)}></input>
      <br />
      <label>Description: </label>
      <input placeholder="Description of the note" value={infoDesc} onChange={(e) => setDesc(e.target.value)}></input>
      <br />
      <label>Id: </label>
      <div className={styles.iddiv}>
        <input value={note.id} readOnly={true}></input>
        <button onClick={() => navigator.clipboard.writeText(note.id)}>Copy</button>
      </div>
      <br />
      <button className={styles.savebtn} onClick={() => {
      setDescription(note.id, infoDesc)
      renameNote(note.id, infoName)
      nav(`/Note/${note.id}`)
      }}>Save and exit</button>
      <button onClick={() => setDelPopup(true)}>Delete note</button>
    </div>
    {delPopup ? (
    <Dialog
      type="delete"
      onCancel={() => setDelPopup(false)}
      onConfirmDelete={() => {
        setDelPopup(false)
        delNote(note.id)
        nav('/Menu')
      }}
      />) : null}
  </>)
}

export default Info