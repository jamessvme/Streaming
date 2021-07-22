<script>
	import '../app.css';
	import Navigation from "$lib/Nav.svelte";
	import GitHub from "$lib/svg/Github.svelte";
	
	const Logo = "Flogram";
	const internal=[
		{ href:"#", text:"Docs" },
		{ href:"#", text:"FAQ" }, 
		{ href:"#", text:"Feedback" }
	];
	const icons = [
		{ svg:GitHub, href:"https://github.com/Flogram/FlogramSvelteWebsite" }
	];
</script>
<nav>
	<Navigation { Logo } { internal } { icons }/>
</nav>
<slot/>
<footer>
	<Navigation {icons}/>
</footer>
<style>
	nav {
		position:absolute;
		top:0;
		left:0;
		z-index:1;
	}
	footer{
		position:absolute;
		bottom:0;
		left:0;
		z-index:1;
	}
</style>
