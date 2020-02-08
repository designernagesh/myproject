import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (        
    <HashRouter basename='/'>
        <div>
          <Route exact path='/' component = {Home} />
          <Route path='/About' component = {About} />
          <Route path='/Contact' component = {Contact} />
        </div>
      </HashRouter>    
  )
}

export default App;
