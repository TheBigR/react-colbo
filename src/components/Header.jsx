import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/currency" className="item active">
          <i className="btc icon"></i>Currency
        </Link>
        <Link to="/history" className="item">
          <i className="history icon"></i>History
        </Link>
        <div className="right menu">
          <Link to="/" className="item ">
            <i className="home icon"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
