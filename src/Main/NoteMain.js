import React from 'react'
import './Main.css'

export default function NoteMain(props) {
    const note = props.notes.find(n => 
        n.id === props.value.match.params.noteId)
    return (
    
        <div className='main__container'>
            <h1>{note.name}</h1>
        </div>
    )
    
}


