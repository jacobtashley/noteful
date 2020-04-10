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

export default class App extends Component {
  state = {
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
        <Link to="/"><h1>Noteful</h1></Link>{' '}
        </header>

        <div className='content'>

          <div className='Sidebar'>
            <Switch>
              <Route
                exact path='/'
                render={(routeProps) =>
                  <MainSidebar
                    folders={this.state.folders}
                    {...routeProps}
                  />
                }
              />

              <Route
                path='/folder/:folderId'
                render={(routeProps) =>
                  <FolderSidebar
                    folders={this.state.folders}
                    {...routeProps}
                  />
                }
              />

              <Route
                path='/note/:noteId'
                render={(routeProps) =>
                  <NoteSidebar
                    folders={this.state.folders}
                    {...routeProps}
                  />
                }
              />
            </Switch>
            

          </div>

          <div className="mainMain">
            <Switch>
              <Route
                exact path='/'
                render={(routeProps) =>
                  <Main
                    notes={this.state.notes}
                    {...routeProps}
                  />
                }
              />

              <Route
                path='/folder/:folderId'
                render={(routeProps) =>
                  <FolderMain
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
                    notes={this.state.notes}
                    {...routeProps}
                  />
                }
              />
            </Switch>
            

          </div>
        </div>
      </div>
    )
  }
}
