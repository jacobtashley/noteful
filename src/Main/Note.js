import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import Context from '../Context'

function deleteNote(noteId, callback) {
    fetch( `${config.API_ENDPOINT}/notes/${noteId}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) {
                // get the error message from the response,
                return res.json().then(error => {
                    // then throw it
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            // call the callback when the request is successful
            // this is where the App component can remove it from state
            callback(noteId)
        })
        .catch(error => {
            console.error(error)
        })
}


export default function Note(props) {
    var myDate = props.note.modified;
    var d = myDate;
    d = d.split("T")[0];

    return (
        <Context.Consumer>
            {(context) => (
                <div className='note' key={props.note.id}>
                    <Link to={`/note/${props.note.id}`}>
                        <h3>{props.note.name}</h3>
                    </Link>
                    <p>Date modified on {d}</p>
                    <button
                        className='deleteButton'
                        onClick= {() =>  {
                            deleteNote(
                                props.note.id,
                                context.deleteNote,
                            )
                        }}>
                        Delete Note
                    </button>
                </div>

            )}
        </Context.Consumer>
    )

}
