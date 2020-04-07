import React from 'react'
import Folders from './Folders'

export default function Sidebar(props) {
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
