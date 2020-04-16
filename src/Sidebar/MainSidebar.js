import React, { Component } from 'react'
import Folders from './Folders'
import './Sidebar.css'
import Context from '../Context'

export default class MainSidebar extends Component {
    static contextType = Context;
    render() {
        return (
            <Context.Consumer>
                <div className='sidebar__container'>
                    <div className="mainButtons">
                        <ul>
                            {this.context.folders.map((folderName) => {
                                return <Folders 
                                    folderName={folderName} 
                                    key={folderName.id} 
                                    setSelectedFolder={this.props.setSelectedFolder} 
                                    selectedFolder={this.props.selectedFolder} 
                                />
                            })}
                        </ul>
                    </div>
                    <div className='addFolderButton'>
                        <button className='button'>Add Folder</button>
                    </div>
                </div>
            </Context.Consumer>
        )
    }
}