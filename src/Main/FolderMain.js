import React, { Component } from 'react'
import Note from './Note'
import './Main.css'
import Context from '../Context'

export default class FolderMain extends Component {
    static contextType = Context
    render() {
        return (
            <div className='main__container'>
                {this.context.selectedNotes.map((note) => {
                    return <Note note={note} key={note.id} />
                })}
                <button className="addNoteButton">Add Note</button>
            </div>
        )
    }
}
