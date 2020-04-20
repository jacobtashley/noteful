import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import Context from '../Context'

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
                        // onClick= {() =>  {
                        //     deleteNote(
                        //         props.note.id,
                        //         context.deleteNote,
                        //     )
                        // }}
                        onClick= {() =>  {
                            context.deleteNote(
                                props.note.id,
                            )
                        }}
                    >
                        Delete Note
                    </button>
                </div>
            )}
        </Context.Consumer>
    )

}
