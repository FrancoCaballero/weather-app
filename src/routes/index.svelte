<script>
	import Card from '../components/card.svelte'

</script>

<div>
	<nav>
		<a href="/locations">+</a>
	</nav>
	<Card/>
</div>

<style>
	div {
		background-image: url('/heaven.jpg');
    background-size: cover;
		flex: 1;
		padding: 10px;
		position: relative;
	}

	nav {
    position: absolute;
    left: 0;
		top: 0;
    margin-left: 10px;
  }
	
	a {
		color: #fff;
		text-decoration: none;
		cursor: pointer;
		font-size: 2rem;
	}
</style>