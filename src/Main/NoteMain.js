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
                <Note/>
                <div className="contentContainer">
                    <p>{note && note.content}</p>
                </div>
            </>
        )
    }
}



