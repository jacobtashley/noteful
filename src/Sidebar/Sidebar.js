import React from 'react'

export default function Sidebar() {
    return (
        <div className='sidebar__container'>
            <div className="mainButtons">
                <button className='button'>Folder 1</button>
                <button className='button'>Folder 2</button>
                <button className='button'>Folder 3</button>
            </div>
            <div className='addButton'>
                <button className='button'>Add Folder</button>
            </div>
        </div>
    )
}
