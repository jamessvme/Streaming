<script>
	import '../app.css';

	import Svg from '$lib/Vector/Svg.svelte';
	import Trap from '$lib/Vector/Trapezoid.svelte';

	import Gradients from './_Gradients.svelte';
	import GitHub from "./Graphics/Github.svelte";
	import Discord from "./Graphics/Discord.svelte";

	const Nav = {
		viewBox:"-200 0 400 90",
		d:{ x:0, y:0, width:'100%', height:'100%' },
		styles:{},
		slots: [
			{
				name:Trap, 
				points: [
					[-200, 56], 
					[-145, 10], 
					[-45, 10], 
					[0, 56]
				],
				margin:[-10,5],
				gradients: [
					'url( #Lin )',		
					'url( #Edges2 )',
				],
				links:[
					{ id:'InstallLink', href:'#Install', text:'Install', vertical:false },
				],
			},
			{
				name:Trap, 
				points: [
					[200, 56], 
					[145, 10], 
					[45, 10], 
					[0, 56]
				],
				margin:[10,5],
				gradients: [
					'url( #Lin )',		
					'url( #Edges )',
				],
				links:[
					{ id:'DocsLink', href:'./Docs', text:'Docs', vertical:false},
				],
			},
			{ 
				name:Trap, 
				points: [
					[-90, 0], 
					[-45, 70], 
					[45, 70], 
					[90, 0],
				],
				gradients: [ 
					'url( #Lin )',
					'url( #Edges )',
					'url( #Edges2 )'
				],
				links:[
					{ id:'Logo', href:'/', text:'Flogram', vertical:false},
				],
				margin: [0,0],
			},
		]
	};
	const Foot = {
		viewBox:"-200 0 400 90",
		d:{ x:0, y:0, width:'100%', height:'100%' },
		styles:{},
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
					'url(#Edges1)'
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
<nav>
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
	.vertical {
		writing-mode:vertical-rl; 
		text-orientation:upright;
		letter-spacing:-.9vh;
	}
	nav {
		position:absolute;
		height:9vh;
		width:100vw;
		top:0;
		display:flex;
		justify-content:center;
		z-index:1;
	}
	main {
		position:absolute;
		top:0;
		left:0;
		height:100vh;
		width:100vw;
		overflow:hidden;
		background-color:'var(--g2w )',
	}
	footer{
		position:absolute;
		height:6vh;
		width:28vw;
		bottom:0;
		right:0;
		z-index:1;
	}
</style>
