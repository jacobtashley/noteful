import React from 'react'
import { Link } from 'react-router-dom'


export default function Note(props) {
    var myDate = props.note.modified;
    var d = myDate;
    d = d.split("T")[0];

    return (
        <div className='note' key={props.note.id}>
            <Link to={`/note/${props.note.id}`}>
                <h3>{props.note.name}</h3>
            </Link>
            <p>Date modified on {d}</p>
            <button className='deleteButton'>Delete Note</button>
        </div>
    )
}
