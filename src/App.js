import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import CurrenciesList from './components/CurrenciesList'
import Currency from './components/Currency'
import Header from './components/Header'

function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Currency} />
          <Route path="/history" exact component={CurrenciesList} />
          <Route path="/currency" exact component={Currency} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
