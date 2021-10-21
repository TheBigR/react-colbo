import React from 'react'
import { useDispatch } from 'react-redux'
import CurrencyItem from './CurrencyItem'

const CurrenciesList = () => {
  return (
    <div>
      <h1>CurrenciesList</h1>
      <CurrencyItem />
    </div>
  )
}

export default CurrenciesList
