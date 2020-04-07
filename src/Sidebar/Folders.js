import React from 'react'

export default function Folders(props) {
    return (
        <li>
            <button key={props.folderName.id} className='button'>{props.folderName.name}</button>
        </li>
    )       
}
