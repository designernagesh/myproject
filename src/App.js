import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (        
      <Router>
        <div>
          <Route exact path='/' component = {Home} />
          <Route exact path='/About' component = {About} />
          <Route exact path='/Contact' component = {Contact} />
        </div>
      </Router>    
  )
}

export default App;
