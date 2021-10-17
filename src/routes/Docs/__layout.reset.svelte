<script>
	import '../../app.css';
	import { sections } from "./Documentation.js";

	import Gradients from '../_Gradients.svelte';
	import Svg from '$lib/Vector/Svg.svelte';
	import Flex from '$lib/Containers/Flex.svelte';
	import Trap from '$lib/Vector/Trapezoid.svelte';
	import GitHub from "../Graphics/Github.svelte";
	import Discord from "../Graphics/Discord.svelte";

	const Nav = {
		viewBox:"0 0 300 300",
		styles:{},
		d:{ x:0, y:0, width:'100%', height:'100%' },
		slots: [
			{
				name:Trap, 
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
					{ id:'InstallLink', href:'#Install', text:'Install' },
				],
			},
			{
				name:Trap, 
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
					{ id:'DocsLink', href:'/Docs', text:'Docs', vertical:true },
				],
			},
			{
				name:Trap, 
				points: [
					[125, 0], 
					[175, 125], 
					[300, 125], 
					[300, 0],
				],
				gradients: [ 
					'url( #Lin )',
					'url( #Edges2 )',
				],
				margin:[0,0],
				links:[
					{ id:'Logo', href:'/', text:'Flogram'},
				],
			},
		]
	};

	const Foot = {
		viewBox:"-200 0 400 90",
		styles:{},
		d:{ x:0, y:0, width:'100%', height:'100%' },
		slots: [
			{ 
				name:Trap, 
				points: [
					[-200, 90], 
					[-90, 0], 
					[200, 0], 
					[200, 90]
				],
				gradients: [
					'url(#Lin2)',		
					'url( #Edges3 )'
				],
				links:[
					{ id:'Github', img:GitHub, href:'https://github.com/FractalMatt/Flogram-Core-Compiler' },
					{ id:'Discord', img:Discord, href:'https://discord.gg/TM4jp3nyMs' }
				],	
				margin:[20,0],
			}
		],
	};

</script>
<Gradients/>
<nav id=navSite>
	<Svg data={ Nav }>
		<g slot=vector let:vector>
			<a href={ vector.links[0].href }>
				<svelte:component this={ vector.name } props={ vector }>
					<svelte:fragment slot=vector let:vector>
						<text class='heading' x={ vector.cx } y={ vector.cy } fill={ vector.f } text-anchor=middle>{ vector.text }</text>
					</svelte:fragment>
				</svelte:component>
			</a>
		</g>
	</Svg>
</nav>
<main>
	<slot></slot>
</main>
<footer>
	<Svg data={ Foot }>
		<svelte:fragment slot=vector let:vector>
			<svelte:component this={ vector.name } props={ vector }>
				<g slot=vector let:vector>
					<a href={ vector.href }>
						<svelte:component this={ vector.img }  data={ vector }/>
					</a>
				</g>
			</svelte:component>
		</svelte:fragment>
	</Svg>
</footer>
<style>
	nav {
		position:absolute;
		height:21vh;
		top:0;
		right:0;
		z-index:1;
	}
	main {
		position:absolute;
		top:0;
		left:0;
		height:100vh;
		width:100vw;
		display:flex;
		flex-direction:row;
		overflow:auto;
		background:var(--g2w );
	}
	a {
		color:var( --white );
	}
	footer{
		position:absolute;
		height:7vh;
		bottom:0;
		right:0;
		z-index:1;
	}
</style>
