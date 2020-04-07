import React, { Component } from 'react'
import './App.css';
import './Sidebar/Sidebar.css'
import './Main/Main.css'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'

export default class App extends Component {
  render() {
    return (
      <div className='App'>

        <header className='header'>
          <h1>Noteful</h1>
        </header>

        <div className='content'>
          <Sidebar 
            folders= { this.props.store.folders }>
            <Route exact path= '/' component={Sidebar} />
            <Route path= '/folder/:folderId' component={folderSidebar} />
            <Route path= '/note/:noteId' component={noteSidebar} />
          </Sidebar>

          <Main
            notes= {this.props.store.notes} >
            <Route exact path = '/' component={Main} />
            {/* <Route path= '/folder/:folderId' component={folderMain} />
            <Route path= '/note/:noteId' component={noteMain} /> */}
          </Main>
        </div>

      </div>
    )
  }
}

