import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import MainSidebar from './Sidebar/MainSidebar'
import FolderSidebar from './Sidebar/FolderSidebar'
import NoteSidebar from './Sidebar/NoteSidebar'
import Main from './Main/Main'
import FolderMain from './Main/FolderMain'
import NoteMain from './Main/NoteMain'
import STORE from './STORE'
import Context from './Context'

export default class App extends Component {
  state = {
    selectedFolder: "",
    selectedNotes: [],
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState({ ...STORE, selectedNotes: STORE.notes })
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
                  // render={(routeProps) =>
                  //   <MainSidebar
                  //     setSelectedFolder={this.setSelectedFolder}
                  //     selectedFolder={this.state.selectedFolder}
                  //     folders={this.state.folders}
                  //     {...routeProps}
                  //   />
                  // }
                />

                <Route
                  path='/folder/:folderId'
                  component={FolderSidebar}
                  // render={(routeProps) =>
                  //   <FolderSidebar
                  //     setSelectedFolder={this.setSelectedFolder}
                  //     selectedFolder={this.state.selectedFolder}
                  //     folders={this.state.folders}
                  //     {...routeProps}
                  //   />
                  // }
                />

                <Route
                  path='/note/:noteId'
                  component={NoteSidebar}
                  // render={(routeProps) =>
                  //   <NoteSidebar
                  //     folders={this.state.folders}
                  //     {...routeProps}
                  //   />
                  // }
                />
              </Switch>


            </div>

            <div className="mainMain">
              <Switch>
                <Route
                  exact path='/'
                  render={(routeProps) =>
                    <Main
                      notes={this.state.selectedNotes}
                      {...routeProps}
                    />
                  }
                />

                <Route
                  path='/folder/:folderId'
                  render={(routeProps) =>
                    <FolderMain
                      notes={this.state.selectedNotes}
                      folders={this.state.folders}
                      {...routeProps}
                    />
                  }
                />

                <Route
                  path='/note/:noteId'
                  render={(routeProps) =>
                    <NoteMain
                      folders={this.state.folders}
                      notes={this.state.selectedNotes}
                      {...routeProps}
                    />
                  }
                />
              </Switch>


            </div>
          </div>
        </div>
      </Context.Provider>
    )
  }
}
