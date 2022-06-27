<script>
  import { findLocations } from '../services/locations'
  import { debounce } from '../helper/common'

  export let handleClick

  let searchText = ''
  let locationResponse = []
  let show = false

  const handleInput = e => {
    searchText = e.target.value
  }
  
  const findLocationsDebounce = debounce(async () => {
    locationResponse = await findLocations(searchText)
    show = true
  }, 500)

  $: if(searchText.length > 2) {
    findLocationsDebounce()
  } else {
    locationResponse = []
    show = false
  }

</script>

<form>


<input type="text" value={searchText} on:input={handleInput} {...$$restProps}>

{#if show}
<ul>
{#await locationResponse}
  <div>loading...</div>
{:then locations}
  {#each locations as location}
    <li on:click={() => {
        handleClick(location)
        show = false
      }}
    >
      {location.country}, {location.name}
    </li>
  {/each}
{/await}
</ul>
{/if}

</form>
<style>
  input {
    width: 100%;
    max-width: 200px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
  }

  form {
    position: relative;
  }

  ul {
    top: 30px;
    width: 100%;
    max-width: 200px;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
  }

  li {
    padding: 10px;
    color: #fff;
    cursor: pointer;
  }

  li:hover {
    background-color: #fff;
    color: #000;
  }
</style>