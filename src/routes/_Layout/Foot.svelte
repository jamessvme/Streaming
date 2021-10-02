<script>
	import Flex from "$lib/Containers/Flex.svelte";
	import TrapZ from "$lib/Vector/Trapezoid.svelte";
	import GitHub from "./Graphics/Github.svelte";
	import Discord from "./Graphics/Discord.svelte";

	const styles = {
		'--direction':'row-reverse',
		'--justify':'end'
	}

	export let viewBox = "-200 0 400 90";

	const slots = [ 
		{
			points: [
				[-200, 100], 
				[-90, 0], 
				[200, 0], 
				[200, 100]
			],
			gradients: [
				'url(#Lin2)',		
				'url(#Edges3)'
			],
			margin:[30,0],
			links:[
				{ id:'Github', img:GitHub, href:'https://github.com/FractalMatt/Flogram-Core-Compiler' },
				{ id:'Discord', img:Discord, href:'https://discord.gg/TM4jp3nyMs' }
			],
		},
	];
</script>
<Flex { styles }{ slots } >
	<svelte:fragment slot=cell let:cell>
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
			{ #each slots as link }
				<TrapZ props={ link }>
					<svelte:fragment slot=vector let:vector>
						<a id={ vector.id } href={ vector.href }>
							<svelte:component this={ vector.img }  data={ vector }/>
						</a>
					</svelte:fragment>
				</TrapZ>
			{ /each }
		</svg>
	</svelte:fragment>
</Flex>
