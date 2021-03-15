const API_ALL = 'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital',
      API_COUNTRY = 'https://restcountries.eu/rest/v2/name/',
      API_COUNTRY_CONFIG = '?fields=flag;name;population;region;capital'
      
const GET_DATA = async (country = '/') => {
  const API_URL = country === '/' ? API_ALL : `${API_COUNTRY}${country}${API_COUNTRY_CONFIG}`

  try {
    const RESPONSE = await fetch(API_URL),
          DATA = await RESPONSE.json()
    
    return DATA
  } catch (error) {
    console.error('ERROOOOOR EN GET_DATA', error)
  }
}

export default GET_DATA