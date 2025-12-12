import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Note.module.css'

function Note(props) {
  const { note } = useParams()
  console.log(note)
  const nav = useNavigate()
  return (<>
      <h1>Note screen</h1>
    </>)
}

export default Note