<script>
	import Flex from "$lib/Containers/Flex.svelte";
	import TrapZ from "$lib/Vector/Trapezoid.svelte";

	export let styles = {
		"--justify":"center"
	};

	export let viewBox = "-200 0 400 90";

	export let slots = [
		[
			{
				points: [
					[-200, 56], 
					[-145, 10], 
					[-45, 10], 
					[0, 56]
				],
				margin:[-10,8],
				gradients: [
					'url( #Lin )',		
					'url( #Edges2 )',
				],
				links:[
					{ id:'InstallLink', href:'#Install', text:'Install', vertical:false },
				],
			},
			{
				points: [
					[200, 56], 
					[145, 10], 
					[45, 10], 
					[0, 56]
				],
				margin:[10,8],
				gradients: [
					'url( #Lin )',		
					'url( #Edges )',
				],
				links:[
					{ id:'DocsLink', href:'./Docs', text:'Docs', vertical:false},
				],
			},
			{
				points: [
					[-90, 0], 
					[-45, 70], 
					[45, 70], 
					[90, 0],
				],
				margin:[0,0],
				gradients: [ 
					'url( #Lin )',
					'url( #Edges )',
					'url( #Edges2 )'
				],
				links:[
					{ id:'Logo', href:'/', text:'Flogram', vertical:false},
				],
			},
		],
	];
</script>
<Flex { styles } { slots }>
	<svelte:fragment slot=cell let:cell>
		<svg { viewBox } height=100% xmlns:svg="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id=Edges x1=0 x2=.9 y1=0 y2=.8>
					<stop offset="75%" stop-opacity='0%' stop-color='var( --purple )'/>
					<stop offset="85%" stop-opacity='35%' stop-color='var( --purple )'/>
					<stop offset="115%" stop-opacity='10%' stop-color='var( --pink )'/>
				</linearGradient>
				<linearGradient id=Edges2 x1=.7 x2=0 y1=0 y2=.6>
					<stop offset="75%" stop-opacity='0%' stop-color='var( --purple )'/>
					<stop offset="85%" stop-opacity='35%' stop-color='var( --purple )'/>
					<stop offset="115%" stop-opacity='10%' stop-color='var( --pink )'/>
				</linearGradient>
				<linearGradient id=Lin x1=0 x2=0 y1=0 y2=1>
					<stop offset="75%" stop-opacity='100%' stop-color='var( --purple )'/>
					<stop offset="85%" stop-opacity='85%' stop-color='var( --purple )'/>
					<stop offset="100%" stop-opacity='15%' stop-color='var( --pink )'/>
				</linearGradient>
				<linearGradient id="IceGra" x1="24.6" x2="37.4" y1="15.4" y2="55.4" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
					<stop stop-color="var(--white)" offset="0"/>
					<stop stop-color="var(--blue)" offset="1"/>
				</linearGradient>
			</defs>
			{ #each slots[0] as link, i (i)}
				<a id={ link.links[0].id } href={ link.links[0].href } class:vertical={ link.links[0].vertical }>
					<TrapZ props={ link }>
						<svelte:fragment slot=vector let:vector>
							<text class='heading' x={ vector.cx } y={ vector.cy } text-anchor=middle fill='url( #IceGra )'>{ link.links[0].text }</text>
						</svelte:fragment>
					</TrapZ>
				</a>
			{ /each }
		</svg>
	</svelte:fragment>
</Flex>
<style>
	.vertical {
		writing-mode:vertical-rl; 
		text-orientation:upright;
		letter-spacing:-.9vh;
	}
</style>
