const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': ''
	}
}

export async function get(event) {
  const { searchParams } = event.url
  const query = searchParams.get('q')

  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`, options)
  const data = await response.json()

  console.log(data)

  return {status: 200, body: data}
}
