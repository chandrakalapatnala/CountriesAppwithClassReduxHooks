import React from 'react'
import { Link } from 'react-router-dom'

const Countries= (props)=>{
  
    const { darkMode } = props
    const { countriesFilter } = props
    const { filterCountriesByRegion } = props

    return filterCountriesByRegion ? (
      <div className="container all-countries">
        {filterCountriesByRegion.map((country) => {
          return (
            <div
              className={`country ${darkMode ? 'dark-mode-elements' : null}`}
              key={country.numericCode}
            >
              <p>{`/country/${country.alpha3Code.toLowerCase()}/${country.name
                  .toLowerCase()}`}</p>
              <Link
                to={`/country/${country.alpha3Code.toLowerCase()}/${country.name
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^\w-]+/g, '')}`}
              >
                <div>
                  <img
                    className="country-flag"
                    src={country.flag}
                    alt={country.name}
                  />
                </div>
                <div className="country-info">
                  <h2>{country.name}</h2>
                  <h4>
                    <span>Population: </span>
                    {country.population.toLocaleString()}
                  </h4>
                  <h4>
                    <span>Region: </span>
                    {country.region}
                  </h4>
                  <h4>
                    <span>Capital: </span>
                    {country.capital}
                  </h4>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    ) : (
      <div className="container all-countries">
        {countriesFilter &&
          countriesFilter.map((country) => {
            return (
              <div
                className={`country ${darkMode ? 'dark-mode-elements' : null}`}
                key={country.numericCode}
              >
                <Link
                  to={`/country/${country.alpha3Code.toLowerCase()}/${country.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}`}
                >
                  <div>
                    <img
                      className="country-flag"
                      src={country.flag}
                      alt={country.name}
                    />
                  </div>
                  <div className="country-info">
                    <h2>{country.name}</h2>
                    <h4>
                      <span>Population: </span>
                      {country.population.toLocaleString()}
                    </h4>
                    <h4>
                      <span>Region: </span>
                      {country.region}
                    </h4>
                    <h4>
                      <span>Capital: </span>
                      {country.capital}
                    </h4>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }


export default Countries
