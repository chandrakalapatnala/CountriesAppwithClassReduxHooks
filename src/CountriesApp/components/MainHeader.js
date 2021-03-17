import React, { Component } from 'react'

 const Header =(props)=>{
 
    const { darkMode } = props
    const { switchMode } = props

    return (
      <header className={`header ${darkMode ? 'dark-mode-elements' : null}`}>
        <div className="container header-text">
          <h1 className="header-h1">At which place in the world?</h1>
          <div className="mode-switch" onClick={switchMode}>
           
            <h4 className="header-mode-switch">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </h4>
          </div>
        </div>
      </header>
    )
  
}

export default Header
