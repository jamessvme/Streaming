<script>
	import Card from "$lib/Containers/Card.svelte";
	import Figure from "$lib/Containers/Figure.svelte";
	import LapTop from "./Graphics/LapTop.svelte";

	const styles = {
		'--width':'60%',
		'--height':'40%',
		'--direction':'row',
		'--color':'var( --purple )',
		'--justify':'center',
		'--align':'center',
	}

	const data = {
		height:'100%', 
		width:'100%' 
	}
</script>
<Card { styles }>
	<svelte:fragment slot=content>
		<h1>Flogram</h1>
		<p>A high performance language that's simple and secure</p>		
	</svelte:fragment>
	<LapTop slot=mediaB { data }/>
</Card>
<style>
	p {
		margin:0;
	}
</style>
