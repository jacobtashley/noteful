import React, { Component } from 'react'
import Folders from './Folders'
import './Sidebar.css'
import Context from '../Context'

export default class FolderSidebar extends Component {
    static contextType = Context;
    render() {

        return (
            <div className='sidebar__container'>
                <div className="mainButtons">
                    <ul>
                        {this.context.folders.map((folderName) => {
                            return <Folders
                                setSelectedFolder={this.context.setSelectedFolder}
                                selectedFolder={this.context.selectedFolder}
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
