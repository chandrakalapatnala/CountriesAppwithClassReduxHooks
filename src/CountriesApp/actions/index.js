import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ALPHA3CODE } from './constants';
import axios from 'axios';

const getAllCountries = (payload) => {
  return {
    type: GET_ALL_COUNTRIES,
    payload,
  }
}

const getCountriesByAlpha = (payload) => {
  return {
    type: GET_COUNTRIES_BY_ALPHA3CODE,
    payload,
  }
}

export const fetchAllCountries = (url) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      const data = res.data
      dispatch(getAllCountries(data))
    }).catch(e=>console.log("error in retrieving countries list",e))
  }
}

export  const countriesByAlpha = (url) => {
  return async function(dispatch) {
    const response = await fetch(url);
    const json = await response.json();
    const status = response.status;
    console.log('status',status);
    if(status === 200){
      dispatch(getCountriesByAlpha(json))
    }
    else{
      console.log("error occured")
    }
  }
}

  export  const countriesByAlpha_aync = (url) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      const data = res.data
      dispatch(getCountriesByAlpha(data))
    }).catch(e=>console.log(e))
  }
}


