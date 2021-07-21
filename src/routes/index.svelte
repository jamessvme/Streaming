<script>
	import Nav from "$lib/Nav.svelte";
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
<Nav { Logo } { internal } { icons }/>
