import React from 'react'
import Note from './Note'
import './Main.css'

export default function FolderMain(props) {
    return (
        <div className='main__container'>
            {props.notes.map((note) => {
                return <Note note = {note} key ={note.id}/>
            })}
            <button className="addNoteButton">Add Note</button>    
        </div>
    )
}
