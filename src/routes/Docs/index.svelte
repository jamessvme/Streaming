<script>
	import Snap from '$lib/Containers/Snap.svelte';
	import Card from '$lib/Containers/Card.svelte';
	import Svg from '$lib/Vector/Svg.svelte';
	import Path from '$lib/Vector/Path.svelte';
	import { sections } from './Documentation.js';

	const local_nav = {
		viewBox:"0 0 100 80",
		d:{
			x:0,
			y:0,
			width:'15.1vw',
		},
		slots:Array('_'),
		styles:{
			'margin-top':'-6vh',
		}
	};
	const card_styles = {
		height:'100vh',
		'--width':'100%',
		'--direction':'row',
		'--justify':'space-around',
		'--align':'center',
		'--color':'var( --white)',
		'text-align':'center',
	};
	const code_block = {
		'--direction':'column',
		'--color':'var( --white)',
		'--background':'black',
		'--pad':'5vw',
		'--height':'45vh',
		'--width':'25vw',
		'--justify':'start',
	};
	const column = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];

	let selected_level = 'beginner';
	const levels = [ 'beginning', 'intermediate', 'expert' ];
</script>
<ul>
	{ #each column as item }
		<Svg data={ local_nav }>
			<svelte:fragment slot=vector let:vector>
				<g>
					<a class=heading2>
						<Path/>
					</a>
				</g>
			</svelte:fragment>
		</Svg>	
	{/each}
	<select class=heading bind:value={ selected_level }>
		{ #each levels as level }
			<option value={level}>
				{ level }
			</option>
		{/each}
	</select>

</ul>
<Snap { sections }>
	<Card slot=section let:section styles={ card_styles }> 
		<svelte:fragment slot=content>
			<h2>{ section.id }</h2>
			<p>{ section.basic }</p>
		</svelte:fragment>
		<svelte:fragment slot=mediaB>
			<Card styles={ code_block }>
				<p slot=content>
					{ section.example }	
				</p>
			</Card>
		</svelte:fragment>
	</Card>
</Snap>
<style>
	ul {
		margin:0;
		padding:0;
		display:flex;
		flex-direction:column-reverse;
	}
	select {
		height:3.5vh;
		text-align:center;
		margin-right:-50%;
	}
</style>
