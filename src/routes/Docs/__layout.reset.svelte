<script>
	import '../../app.css';
	import Nav from "../_Layout/Nav.svelte";
	import Foot from "../_Layout/Foot.svelte";
	import Flex from "$lib/Containers/Flex.svelte";
	import { sections } from "./Documentation.js";

	let nav_styles = {
		'--direction':'row-reverse',
	}

	let list_styles = {
		'--direction':'column',
	}

	let viewBox = "0 0 300 300";

	let slots = [
		[
			{
				points: [
					[0, 0], 
					[50, 75], 
					[185, 75],
					[150, 0], 
				],
				margin:[0,5],
				gradients: [
					'url( #Lin )',		
					'url( #Edges2 )',
				],
				links:[
					{ id:'InstallLink', href:'/#Home', text:'Install' },
				],
			},
			{
				points: [
					[300, 275], 
					[225, 225],
					[225, 125], 
					[300, 125], 
				],
				margin:[0,5],
				gradients: [
					'url( #Lin )',		
					'url( #Edges2 )',
				],
				links:[
					{ id:'DocsLink', href:'./Docs', text:'Docs', vertical:true },
				],
			},
			{
				points: [
					[125, 0], 
					[175, 125], 
					[300, 125], 
					[300, 0],
				],
				gradients: [ 
					'url( #Lin )',
					'url( #Edges )',
					'url( #Edges2 )'
				],
				margin:[0,0],
				links:[
					{ id:'Logo', href:'/', text:'Flogram'},
				],
			},
		],
	];
</script>
<nav id=navSite>
	<Nav styles={ nav_styles } { slots } { viewBox }/>
</nav>
<main>
	<ul id=navDoc>
		<Flex styles={ list_styles } slots={ sections }>
			<svelte:fragment slot=cell let:cell>
				<a id='{ cell.id }Link' href='{ cell.href }'>{cell.id}</a>
			</svelte:fragment>
		</Flex>
	</ul>
	<slot></slot>
</main>
<footer>
	<Foot/>
</footer>
<style>
	#navSite {
		position:absolute;
		height:20vh;
		width:50vw;
		top:0;
		right:0;
		z-index:1;
	}
	main {
		position:absolute;
		bottom:0;
		right:0;
		height:100vh;
		width:100vw;
		overflow:hidden;
	}
	#navDoc {
		position:absolute;
		top:0;
		left:0;
		width:15vw;
		height:100vh;
		background:var(--purple);
		margin:0;
		padding:5vh 0 0 5vh;
		z-index:1;
	}
	a {
		color:var( --white );
	}
	footer{
		position:absolute;
		height:6vh;
		width:50vw;
		bottom:0;
		right:0;
		z-index:1;
	}
</style>
