<script>
	import Flex from "$lib/Containers/Flex.svelte";
	import TrapZ from "$lib/Vector/Trapezoid.svelte";
	import GitHub from "./Graphics/Github.svelte";
	import Discord from "./Graphics/Discord.svelte";

	const props = {
		"flex-direction":"row-reverse"
	}

	const slots = [ 
		{
			Main: {
				interval:3,
				fill:'url(#Lin2)',		
				points: [
					[-200, 100], 
					[-125, 0], 
					[200, 0], 
					[200, 100]
				],
			},
			Edge : {
				fill:'url(#Edges3)',		
				points: [
					[-200, 100], 
					[-125, 0], 
					[200, 0], 
					[200, 100]
				],
			},
			icons: [
				{ width:'100%', height:'80%', x:'-100', y:'5' },
				{ width:'100%', height:'88%', x:'-230', y:'0' },
			]
		}
	]
</script>
<Flex { props }{ slots } >
	<svelte:fragment slot=data let:data>
		<svg id="FooterBottom" viewBox="-200 0 400 100" height=100% xmlns:svg="http://www.w3.org/2000/svg" >		
			<defs>
				<linearGradient id=Lin2 x1=0 x2=0 y1=0 y2=1>
					<stop offset="-15%" stop-opacity='10%' stop-color='var( --pink )'/>
					<stop offset="15%" stop-opacity='100%' stop-color='var( --purple )'/>
					<stop offset="25%" stop-opacity='85%' stop-color='var( --purple )'/>
				</linearGradient>
				<linearGradient id=Edges3 x1=0 x2=0 y1=0 y2=1>
					<stop offset="75%" stop-opacity='0%' stop-color='var( --purple )'/>
					<stop offset="85%" stop-opacity='35%' stop-color='var( --purple )'/>
					<stop offset="115%" stop-opacity='20%' stop-color='var( --pink )'/>
				</linearGradient>
			</defs>
			<TrapZ data={ data.Main } >
				<TrapZ data={ data.Edge }>
					<a id=Github href='https://github.com/FractalMatt/Flogram-Core-Compiler'>
						<GitHub data={ data.icons[0] }/>
					</a>
					<a id=Discord href='https://discord.gg/TM4jp3nyMs'>
						<Discord data={ data.icons[1] }/>
					</a>
				</TrapZ>
			</TrapZ>
		</svg>
	</svelte:fragment>
</Flex>
