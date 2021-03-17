import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ALPHA3CODE } from '../actions/constants'

const initState = {
  countries: [],
  country: {},
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    case GET_COUNTRIES_BY_ALPHA3CODE:
      return {
        ...state,
        country: action.payload,
      }
    default:
      return state
  }
}

export default reducer
