import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import CurrenciesList from './components/CurrenciesList'
import Header from './components/Header'

function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <div>
          <Header />
          <CurrenciesList />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
