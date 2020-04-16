import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Folders(props) {
    
    return (
        <li className={props.selectedFolder === props.folderName.name ? "active": ""}> 
            <Link 
                to={`/folder/${props.folderName.id}`} 
                className={props.selectedFolder === props.folderName.name ? "active": ""}
                onClick={()=> props.setSelectedFolder(props.folderName.name)}
                >
                <div className='button'>
                    {props.folderName.name}
                </div>
            </Link>
        </li>
    )
}
