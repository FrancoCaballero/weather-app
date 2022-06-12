<script>
  import { onMount } from 'svelte'
  import InputSearch from "../components/InputSearch.svelte"
  import LocationItem from "../components/LocationItem.svelte"

  let locations = []

  onMount(() => {
    locations = JSON.parse(localStorage.getItem('locations')) || []
    console.log(locations)
  })

  const handleClick = async ({lat, lon}) => {
      const query = `${lat},${lon}`
      localStorage.setItem('locations', JSON.stringify([query, ...locations]))
  }
</script>

<section>
  <nav>
    <a href="/">Volver</a>
  </nav>
  <h1>Manage Cities</h1>
  <InputSearch handleClick={handleClick} placeholder="Find locations"/>
  
  <div>
    {#each locations as location}
      <LocationItem query={location}/>
    {/each}
  </div>
</section>

<style>
  section {
    background-color: rgb(51, 49, 49);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  h1 {
    color: #fff;
    font-weight: lighter;
    margin-top: 50px;
  }

  nav {
    position: absolute;
    left: 0;
    margin: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    max-height: 640px;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;;
  }
</style>