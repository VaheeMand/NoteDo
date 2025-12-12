import React, { useState } from 'react'
import styles from './Menu.module.css'

function Dialog(props) {
  const [input, setInput] = useState('New note')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleCreate = () => {
    props.notefunc(input)
    setInput('New note')
  }

  return (
    <div className={styles.dialogbg} onClick={() => props.onCancel()}>
      {props.type === 'create' && (
        <div onClick={(e) => e.stopPropagation()} className={styles.dialog}>
          <h1>Creating note</h1>
          <p>Enter note name</p>
          <input
            value={input}
            placeholder="Note name"
            onChange={handleInputChange}
          />
          <button onClick={handleCreate}>Create</button>
        </div>
      )}

      {props.type === 'popup' && (
        <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
          <div></div>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onRename}>Rename</button>
        </div>
      )}

      {props.type === 'delete' && (
        <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
          <div></div>
          <h1>Delete note?</h1>
          <p>This action cannot be undone.</p>
          <button onClick={props.onConfirmDelete} style={{ background: '#d10000' }}>
            Delete permanently
          </button>
        </div>
      )}

      {props.type === 'rename' && (
        <div onClick={(e) => e.stopPropagation()} className={styles.dialog}>
          <h1>Rename note</h1>
          <p>Enter new name</p>
          <input
            value={input}
            placeholder="New name"
            onChange={handleInputChange}
            autoFocus
          />
          <button onClick={() => props.onConfirmRename(input)}>Save</button>
        </div>
      )}
    </div>
  )
}

export default Dialog