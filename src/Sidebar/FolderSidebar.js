import React, { Component } from 'react'
import Folders from './Folders'
import './Sidebar.css'
import Context from '../Context'

export default class FolderSidebar extends Component {
    static contextType = Context;
    render() {
        const { folders=[] } = this.context
        return (
            <div className='sidebar__container'>
                <div className="mainButtons">
                    <ul>
                        {folders.map((folderName) => {
                            return <Folders
                                setSelectedFolder={this.props.setSelectedFolder}
                                selectedFolder={this.props.selectedFolder}
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
}
