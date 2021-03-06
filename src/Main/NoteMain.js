import React, { Component } from 'react'
import './Main.css'
import Context from '../Context'
import Note from './Note'

export default class NoteMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = Context

    render() {
        const note = this.context.notes.find(n =>
            n.id === this.props.match.params.noteId
        )
        return (
            <>
                <div className='note'>

                    <h3>{note && note.name}</h3>

                    <p>Date modified on </p> {note && note.modified}
                    <button
                        className='deleteButton'
                        onClick= {() =>  {
                            this.context.deleteNote(
                                note.id, ()=>{this.props.history.push("/")}
                            )
                        }}>Delete Note</button>
                </div>
                <div className="contentContainer">
                    <p>{note && note.content}</p>
                </div>
            </>
        )
    }
}