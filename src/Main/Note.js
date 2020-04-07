import React from 'react'


export default function Note(props) {
    var myDate = props.note.modified;
    var d = myDate;
    d = d.split("T")[0];

    return (
        <div className='note' key={props.note.id}>
            <h3>{props.note.name}</h3>
            <p>Date modified on {d}</p>
            <button className='deleteButton'>Delete Note</button>
        </div>
    )
}
