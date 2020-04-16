import React, { Component } from 'react'
import Note from './Note'
import './Main.css'
import Context from '../Context'

export default class Main extends Component {
    static contextType = Context
    render() {
        return (
            <div className='main__container'>
                {this.context.notes.map((note) => {
                    return <Note note={note} key={note.id} />
                })}
                <button className="addNoteButton">Add Note</button>
            </div>
        )
    }
}
