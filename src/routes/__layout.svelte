<script>
	import '../app.css';
	import Nav from "$lib/Page/Nav.svelte";
	import Foot from "$lib/Page/Foot.svelte";
</script>
<nav>
	<Nav/>
</nav>
<slot></slot>
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
	footer{
		position:absolute;
		bottom:0;
		height:9vh;
		width:100vw;
		bottom:-2vh;
		left:0;
		z-index:1;
	}
</style>
