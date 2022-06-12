<script>
  import { onMount } from 'svelte';
  import { getWeatherByLocation } from '../services/weather.js'

  let weatherResponse;
  onMount(async () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords
        const query = `${latitude},${longitude}`
        weatherResponse = getWeatherByLocation(query)
      },
      () => {
        console.log('error');
        weatherResponse = getWeatherByLocation()
      }
    );
  });

  // const weatherResponse = getWeatherByLocation('Chile');
  // console.log(weatherResponse);
</script>

<section>
{#if weatherResponse}
  {#await weatherResponse then weather}
      <div>
        <h1>{weather.country}</h1>
        <h3>{weather.locationName}</h3>
        <p>{weather.temperature}<img src="/celsius.png" alt="grade"/> </p>
        <h3>{weather.conditionText}</h3>
      </div>
      <aside>
        <img src={weather.conditionIcon} alt="weatherIcon">
      </aside>
  {/await}  
{/if}
</section>
      
<style>
  * {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #fff;
  }

  p {
    font-size: 5rem;
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  div p img {
    width: 2rem;
    height: 2rem;
    margin-left: 5px;
  }

  section {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  aside {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px
  }

  img {
    width: 100px;
    height: auto;
  }
</style>