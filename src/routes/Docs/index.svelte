<script>
	import Snap from "$lib/Containers/Snap.svelte";
	import Card from "$lib/Containers/Card.svelte";

	import { sections } from './Documentation.js';

	const styles = {
		position:'absolute',
		top:'0',
		right:'-2vw',
		background:'var(--g2w )',
		width:'85vw',
	};

	const card_styles = {
		'--height':'50vh',
		'--width':'80vw',
		'--direction':'row',
		'--justify':'space-around',
		'--align':'center',
		'--color':'var( --white)',
	}

	const code_block = {
		'--direction':'column',
		'--color':'var( --white)',
		'--background':'black',
		'--pad':'5vw',
		'--height':'40vh',
		'--width':'25vw',
		'--justify':'start',
	}

</script>
<Snap { styles } { sections }>
	<svelte:fragment slot=section let:section>
		<Card styles={ card_styles }> 
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
	</svelte:fragment>
</Snap>
