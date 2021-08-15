<script>
	import Snap from "$lib/Containers/Snap.svelte";

	import LapTop from "$lib/svg/LapTop.svelte";
	import Machine from "$lib/svg/Machine.svelte";

	import Banner from "$lib/Page/Home/Banner.svelte";
	import Sect3 from "$lib/Page/Home/Section3.svelte";
	import TypeWriter from "$lib/animation/TypeWriter.svelte";

	const txtToFill = "Build fast programs faster";
	const delay = 0;
	
	let components = [ 
		{ 
			cmp:Banner, 
			props:{ 
				heading: 'Flogram',
				caption: '',
				image: LapTop,
				size: { h:'100%', w:'75%' }
		  	}
		},
		{ 
			cmp:Sect3, 
			props:{ 
				caption:'',
				cards: [
					{ 
						heading:'High Productivity',
						list:[
							'Simple mental model',
							'Simplify debugging',
							'Improve readability',
							'Acyclical data structures',
						],
						d:{h:'33vh', w:'28vw', t:'13vh'}
					},
					{
						heading:'High Performance',
						list:[
							'No garbage collector (GC)',
							'Allocate memory in bulk',
							'Automatic threading',
							'Automatic async',
							'Automatic ownership',
							'~3x less memory than GC',
						],
						d:{h:'40vh', w:'31vw'}
					},
					{
						heading:'High Security',
						list:[
							'Memory Safe',
							'Thread Safe',
							'Type Safe',
							'No Nulls'
						],
						d:{h:'33vh', w:'28vw', t:'13vh' }
					}
				]
			}
		},
	];
</script>
<Snap { components }>
	<svelte:fragment slot='component' let:component></svelte:fragment>
</Snap>
<style>
	picture{
		height:100%;
		width:100%;
	}
</style>
