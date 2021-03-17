import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// Components
import FilterRegion from './CountriesApp/components/Filter'
import CountryInfo from './CountriesApp/components/CountryInfo'
import MainHeader from './CountriesApp/components/MainHeader'

// Styling
import './Styles.css'

class App extends Component {
  state = {
    darkMode: false,
  }

  switchMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className={`App${this.state.darkMode ? ' dark-mode' : ''}`}>
          <MainHeader darkMode={this.state.darkMode} switchMode={this.switchMode} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <FilterRegion {...props} darkMode={this.state.darkMode} />
              )}
            />
            <Route
              path="/country/:alpha/:name"
              render={(props) => (
                <CountryInfo {...props} darkMode={this.state.darkMode} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
