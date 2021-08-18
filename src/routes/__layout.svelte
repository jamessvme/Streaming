<script>
	import '../app.css';
	import Nav from "$lib/Page/Nav.svelte";
	import Foot from "$lib/Page/Foot.svelte";
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
		height:10vh;
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
		width:101.5vw;
		padding-right:1.5vw;
		overflow-x:hidden;
		overflow-y:auto;
		scroll-snap-type:y mandatory;
	}
	footer{
		position:absolute;
		height:9vh;
		width:100vw;
		bottom:-2vh;
		right:0;
		z-index:1;
		background:lime;
	}
</style>
