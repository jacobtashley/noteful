import React from 'react'
import './Main.css'

export default function NoteMain(props) {

    const note = props.notes.find(n =>
        n.id === props.match.params.noteId
    )


    return (
        <>
            <div className='note'>

                <h3>{note && note.name}</h3>

                <p>Date modified on </p> {note && note.modified}
                <button className='deleteButton'>Delete Note</button>
            </div>
            <div className="contentContainer">
                <p>{note && note.content}</p>
            </div>
        </>
    )

}


