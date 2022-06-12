const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '',
  },
}

export async function get(event) {
  const { searchParams } = event.url
  const query = searchParams.get('q')

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    options
  )
  const data = await response.json()

  const {current, location} = data
  const {country, name, localtime} = location
  const {temp_c, condition, wind_kph, wind_dir, humidity} = current
  const {text, icon} = condition

  const body = {
    country,
    locationName: name,
    localtime,
    temperature: temp_c,
    conditionText: text,
    conditionIcon: icon,
    windSpeed: wind_kph,
    windDirection: wind_dir,
    humidity,
  }

  return {status: '200', body}
}