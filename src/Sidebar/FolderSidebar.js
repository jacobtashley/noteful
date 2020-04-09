import React from 'react'
import Folders from './Folders'
import './Sidebar.css'

export default function MainSidebar(props) {
    return (
        <div className='sidebar__container'>
            <div className="mainButtons">
                <ul>
                    { props.folders.map((folderName) => {
                        return <Folders folderName= { folderName } key={folderName.id}/>
                    })}
                </ul>
            </div>
            <div className='addFolderButton'>
                <button className='button'>Add Folder</button>
            </div>
        </div>
    )
}