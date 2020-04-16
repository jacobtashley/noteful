import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import MainSidebar from './Sidebar/MainSidebar'
import FolderSidebar from './Sidebar/FolderSidebar'
import NoteSidebar from './Sidebar/NoteSidebar'
import Main from './Main/Main'
import FolderMain from './Main/FolderMain'
import NoteMain from './Main/NoteMain'
import Context from './Context'
import config from'./config'

export default class App extends Component {
  state = {
    notes: [],
    folders: [],
    selectedFolder: "",
    selectedNotes: []
   
  }

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
}


  setSelectedFolder = name => this.setState(state => {
    const { id } = state.folders.find(folder => folder.name === name)
    return {
      selectedFolder: name,
      selectedNotes: state.notes.filter(note => note.folderId === id)
    }    
  })
  

  goHome = () => this.setState(state => ({
    selectedFolder: "",
    selectedNotes: state.notes
  }))

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      setSelectedFolder : this.setSelectedFolder,
      selectedFolder: this.state.selectedFolder,
    }

    return (
      <Context.Provider value={contextValue}>
        <div className='App'>

          <header className='header'>
            <Link to="/" onClick={this.goHome}><h1>Noteful</h1></Link>{' '}
          </header>

          <div className='content'>

            <div className='Sidebar'>
              <Switch>
                <Route
                  exact path='/'
                  component={MainSidebar}
                />

                <Route
                  path='/folder/:folderId'
                  component={FolderSidebar}
                />

                <Route
                  path='/note/:noteId'
                  component={NoteSidebar}
                />
              </Switch>


            </div>

            <div className="mainMain">
              <Switch>
                <Route
                  exact path='/'
                  component={Main}
                />

                <Route
                  path='/folder/:folderId'
                  component={FolderMain}
                />

                <Route
                  path='/note/:noteId'
                  component={NoteMain}
                />
              </Switch>


            </div>
          </div>
        </div>
      </Context.Provider>
    )
  }
}
