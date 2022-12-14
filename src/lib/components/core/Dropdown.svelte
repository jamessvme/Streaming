<script lang="ts">
	export let visibility = false;
	export let direction = 'left';

	let directionClass = '';
	if (direction === 'left') directionClass = 'left-0';
	else if (direction === 'right') directionClass = 'right-0';
	else directionClass = '';
</script>

<div
	class={`${
		visibility ? 'opacity-100 z-10' : 'opacity-0 -z-10'
	} absolute m-0 transition mt-2 ${directionClass}`}
>
	<div class="bg-white shadow-sm text-inherit w-3xl rounded-md border-[1px]">
		<slot />
	</div>
</div>
