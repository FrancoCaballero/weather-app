<div>
  <main>
    <slot />
  </main>
</div>

<style>
  :global(body) {
    background: #bdbdbd;
		min-height: 100vh;
    display: grid;
    place-content: center;
    margin: 0;
	}

  :global(*, *::after, *::before) {
		box-sizing: border-box;
	}

  div {
    width: 360px;
    aspect-ratio: 9 / 16;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  main {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
  }
</style>