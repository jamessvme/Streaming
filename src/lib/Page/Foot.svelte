<script>
	import Flex from "$lib/Containers/Flex.svelte";
	import TrapZ from "$lib/svg/Trapezoid.svelte";
	import GitHub from "$lib/svg/icons/Github.svelte";
	import Discord from "$lib/svg/icons/Discord.svelte";

	const Footer = {
		interval:3,
		fill:'url(#Lin2)',		
		points: [
			[-200, 100], 
			[-125, 0], 
			[200, 0], 
			[200, 100]
		],
		inner: [
			[ '100%', '80%', '-100', '5' ],
			[ '100%', '88%', '-230', '0' ],
		]
	}

	const FooterEdge = {
		fill:'url(#Edges3)',		
		points: [
			[-200, 100], 
			[-125, 0], 
			[200, 0], 
			[200, 100]
		],
	}

</script>
<Flex props={{list:1, right:true}}>
	<svg id="FooterBottom" viewBox="-200 0 400 100" height=100% xmlns:svg="http://www.w3.org/2000/svg" >		
		<def>
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
		</def>
		<TrapZ data={ Footer } >
			<TrapZ data={ FooterEdge }>
				<a id=Github href='https://github.com/FractalMatt/Flogram-Core-Compiler'>
					<GitHub data={ Footer.inner[0] }/>
				</a>
				<a id=Discord href='https://discord.gg/TM4jp3nyMs'>
					<Discord data={ Footer.inner[1] }/>
				</a>
			</TrapZ>
		</TrapZ>
	</svg>
</Flex>
