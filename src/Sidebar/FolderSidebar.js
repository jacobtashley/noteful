import React from 'react'
import Folders from './Folders'
import './Sidebar.css'

export default function MainSidebar(props) {
    
    return (
        <div className='sidebar__container'>
            <div className="mainButtons">
                <ul>
                    {props.folders.map((folderName) => {
                        return <Folders
                            setSelectedFolder={props.setSelectedFolder}
                            selectedFolder={props.selectedFolder}
                            key={folderName.id}
                            folderName={folderName} />
                    })}
                </ul>
            </div>
            <div className='addFolderButton'>
                <button className='button'>Add Folder</button>
            </div>
        </div>
    )
}