<script>
  export let location
</script>

{#if location}
  <section>
    <div>
      <h1>{location.country}</h1>
      <h3>{location.locationName}</h3>
    </div>
    <aside>
      <p>{location.temperature}<img src="/celsius.png" alt="grade"/></p>
      <h3>{location.conditionText}</h3>
    </aside>
  </section>
{/if}


<style>

  section {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    width: 90%;
    max-width: 350px;
    background-color: rgb(42, 128, 226);
    border-radius: 10px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
  }

  aside {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-left: 5px;
  }

</style>