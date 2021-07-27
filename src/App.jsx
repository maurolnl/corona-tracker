import React, { useState } from 'react'
import './App.css'
import { Route } from 'wouter'
import Home from './pages/Home/index' 
import Search from './pages/Search/index'

function App() {

  return (
    <div className="App">
      <Route
        path="/"
        component={Home}
      />  
      <Route 
        path="/search/:keyword"
        component={Search} 
      />
    </div>
  )
}

export default App
