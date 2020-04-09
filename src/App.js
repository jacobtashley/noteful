import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import MainSidebar from './Sidebar/MainSidebar'
import FolderSidebar from './Sidebar/FolderSidebar'
import NoteSidebar from './Sidebar/NoteSidebar'
import Main from './Main/Main'
import FolderMain from './Main/FolderMain'
import NoteMain from './Main/NoteMain'
import STORE from './STORE'

export default class App extends Component {
  state= {
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState(STORE)
  }

  render() {
    return (
      <div className='App'>

        <header className='header'>
          <h1>Noteful</h1>
        </header>

        <div className='content'>

          <div className='Sidebar'>

            <Route 
              exact path= '/' 
              render={ () => 
                <MainSidebar
                  folders= { this.state.folders } 
                />
              }
            />

            <Route 
              path= '/folder/:folderId' 
              render={ () => 
                <FolderSidebar
                  folders= { this.state.folders } 
                />
              }
            />

            <Route 
              path= '/note/:noteId' 
              render={ () => 
                <NoteSidebar
                  folders= { this.state.folders } 
                />
              }
            />

          </div>

          <div className="mainMain">

            <Route 
              exact path = '/' 
              render ={() => 
                <Main
                  notes= {this.state.notes}
                />
              } 
            />

            <Route 
              path= '/folder/:folderId' 
              render={ () => 
                <FolderMain
                  folders= { this.state.folders } 
                />
              }
            />

            <Route 
              path= '/note/:noteId' 
              render={ () => 
                <NoteMain
                  folders= { this.state.folders } 
                  notes = {this.state.notes}
                />
              }
            />

          </div>
        </div>
      </div>
    )
  }
}
