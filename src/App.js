import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { Router, Route, Link } from 'react-router-dom';
import theme from "./styles/theme";
import Home from './Epics/Pages/home'
import Chat from './Epics/Pages/Components/Chat/chat'
import history from './history';

function App () {
  return (
    <ThemeProvider theme={theme}>
 <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </div>
    </Router>
      {/* <div className='App'>
        <header >
          <Home />
        </header>
      </div> */}
    </ThemeProvider>
  )
}

export default App
