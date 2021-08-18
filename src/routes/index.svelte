<script>
	import Snap from "$lib/Containers/Snap.svelte";

	import LapTop from "$lib/svg/LapTop.svelte";

	import Banner from "$lib/Page/Home/Banner.svelte";
	import Sect3 from "$lib/Page/Home/Section3.svelte";

	/*import TypeWriter from "$lib/animation/TypeWriter.svelte";

	const txtToFill = "Build fast programs faster";
	const delay = 0;*/
	
	let components = [ 
		{ 
			cmp:Banner, 
			props:{ 
				heading: 'Flogram',
				caption: 'Build Fast Programs Fast',
				image: LapTop,
				size: { h:'100%', w:'75%' }
		  	}
		},
		{ 
			cmp:Sect3, 
			props: {
				fill: [
					{ 
						heading:'High Productivity', 
						list: [ 	
							'Simple mental model',
							'Simplify debugging',
							'Improve readability',
							'Acyclical data structures',
						],
						d: { height:'33vh', width:'28vw', marginTop:'13vh' },
					},
					{ 
						heading:"High Performance", 
						list: [
							'No garbage collector (GC)',
							'Allocate memory in bulk',
							'Automatic threading',
							'Automatic async',
							'Automatic ownership',
							'~3x less memory than GC',
						],			
						d:{ height:'40vh', width:'31vw' }
					},
					{ 
						heading:'High Security',
						list: [
							'Memory Safe',
							'Thread Safe',
							'Type Safe',
							'No Nulls'
						],
						d: { height:'33vh', width:'28vw', marginTop:'13vh' },
					},
				],
			},
		},
	];
</script>
<Snap { components } --padding="0 3vw" --background="var( --g2w )">
	<svelte:fragment slot='component' let:component>
		<svelte:component this={ component.cmp } props={ component.props }/>
	</svelte:fragment>
</Snap>
