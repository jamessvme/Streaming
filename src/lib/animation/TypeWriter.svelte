<script>
	import { onMount }
	import { frame } from "./frame.js";
	
	export let textToFill = "";
	export let delay = 0;
	
	let display = "";
	let cursor = "_";
	
	onMount(()=>frame.animate())
	
	$: display < txtToFill ? display = display+txtToFill[($frame)] : $frame.reset(); 

	//TODO make cursor blink and replace frame.reset with frame.setTo()
	//$: $frame%18 === 0 ? cursor= " " : cursor = "_";
</script>
$: { display }{ cursor }
