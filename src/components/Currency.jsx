import React from 'react'
import { useDispatch } from 'react-redux'

const Currency = () => {
    let dispatch = useDispatch()
  return (
    <div>
      <h1> Currency Fetcher </h1>
      <div className="ui container">

        <button className="ui labeled icon button">
          <i className="btc icon"></i>
          Get Rates
        </button>
      </div>
    </div>
  )
}

export default Currency
