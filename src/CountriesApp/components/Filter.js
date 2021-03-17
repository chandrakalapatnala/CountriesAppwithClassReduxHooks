import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllCountries } from '../actions/index'
import { FETCH_ALL_COUNTRIES_URL } from '../RestAPIs/index'
import Select from 'react-select'

// Components
import Countries from './ListCountries'

// Dropdown options
const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

const Home =(props)=> {
  // Initialize state
  const [search,setSearch] =useState('');
  const [filter,setFilter] =useState(null);
  

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleChangeFilter = (filter) => {
    //console.log('filter',filter.value);
    setFilter(filter.value);
  }

  useEffect(()=> {// Fetch all countries
    props.allCountries(FETCH_ALL_COUNTRIES_URL)
  },[])

  const { darkMode } = props

    // From mapStateToProps
    const { countries } = props
  
   

    // From route
    

    // Filter countries when searching
    const countriesFilter = countries.filter(
      (country) =>
        country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        country.alpha3Code.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    )

    // Filter countries by region
    const filterByRegion = countries.filter(
      (country) => country.region === filter,
    )

    const regions = filterByRegion

    // Search filter countries by region
    const filterCountriesByRegion = regions.length
      ? regions.filter(
          (region) =>
            region.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            region.alpha3Code.toLowerCase().indexOf(search.toLowerCase()) !==
              -1,
        )
      : null

    return (
      <div className={darkMode ? 'dark-mode' : ''}>
        <div className="searchbar-filter container">
          <form className={`form ${darkMode ? ' dark-mode-elements' : ''}`}>
            <ion-icon name="search-outline"></ion-icon>
            <input
              className={`searchbar ${darkMode ? 'dark-mode-elements' : ''}`}
              value={search}
              onChange={handleChangeSearch}
              placeholder="Search for a country..."
            />
          </form>
          <Select
            value={options.value}
            onChange={handleChangeFilter}
            placeholder="Filter by Region"
            options={options}
            className={`select-options ${darkMode ? 'dark-mode-elements' : ''}`}
          />
        </div>
        <Countries
          countriesFilter={countriesFilter}
          filterCountriesByRegion={filterCountriesByRegion}
          darkMode={darkMode}
        />
      </div>
    )
  }


const mapStateToProps = (state) => {
  
  return {
    countries:state.countries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allCountries: (url) => dispatch(fetchAllCountries(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
