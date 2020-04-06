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

        <Sidebar>
          <Route path= '/' component={Sidebar} />
        </Sidebar>

        <Main>
          <Route path = '/' component={Main} />
        </Main>

      </div>
    )
  }
}

