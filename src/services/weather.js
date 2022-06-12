export async function getWeatherByLocation(query = 'Chile') {
  return fetch(`/api/get-weather?q=${query}`).then(res => res.json())
}
