<script>
	import '../app.css';
	import Nav from "./_Layout/Nav.svelte";
	import Foot from "./_Layout/Foot.svelte";
</script>
<nav>
	<Nav/>
</nav>
<main>
	<slot></slot>
</main>
<footer>
	<Foot/>
</footer>
<style>
	nav {
		position:absolute;
		height:9vh;
		width:100vw;
		top:0;
		left:0;
		z-index:1;
	}
	main {
		position:absolute;
		top:0;
		left:0;
		height:100vh;
		width:100vw;
		overflow:hidden;
	}
	footer{
		position:absolute;
		height:7vh;
		width:100vw;
		bottom:-2vh;
		right:0;
		z-index:1;
	}
</style>
