import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom' 

export default function MainSidebar() {
    return (
        <div className='sidebar__container'>
            <div className='addFolderButton'>
                <Link to= {'/'}>
                    <button className='button'>Go Back</button>
                </Link>
            </div>
        </div>
    )
}