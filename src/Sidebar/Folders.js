import React from 'react'
import { Link } from 'react-router-dom'

export default function Folders(props) {
    return (
        <li>
            <button key={props.folderName.id} className='button'>
                <Link to={`/folder/${props.folderName.id}`}> 
                    {props.folderName.name}
                </Link>
            </button>
        </li>
    )       
}
