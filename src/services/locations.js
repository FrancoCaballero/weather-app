export async function findLocations(query = 'Chile') {
  return fetch(`/api/find-locations?q=${query}`).then(res => res.json())
}