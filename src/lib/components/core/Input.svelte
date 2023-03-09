<script type="ts">
	export let focusBorderColor = 'blue';
	export let placeholder = '';
	export let value = '';
	export let size = 'md';
	export let type = 'text';
	export let isInvalid = false;
	export let isLoading = false;

	let timer: any;

	const focusBorderColors = {
		blue: 'focus-visible:border-blue-500'
	};

	const sizes = {
		xs: 'h-6 text-xs px-2',
		sm: 'h-8 text-sm px-3',
		md: 'h-10 text-base px-4',
		lg: 'h-12 text-lg px-4'
	};

	const variants = {
		outline: '',
		filled: '',
		flushed: '',
		unstyled: ''
	};

	type FocusBorderColorType = typeof focusBorderColors;
	type SizeType = typeof sizes;
	type VariantType = typeof variants;

	const handleInput = (e: any) => {
		// in here, you can switch on type and implement
		// whatever behaviour you need
		clearTimeout(timer);

		timer = setTimeout(() => {
			value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
		}, 750);
	};

	const focusBorderColorF = focusBorderColors[focusBorderColor as keyof FocusBorderColorType];
	const sizeF = sizes[size as keyof SizeType];
</script>

<div class="w-full flex relative">
	<input
		{type}
		class={`dark:text-gray-800 w-full min-w-0 outline outline-transparent outline-2 outline-offset-2 appearance-none relative transition py-0 ${sizeF} rounded-md border ${
			isInvalid ? 'border-red-500' : 'border-inherit focus-visible:z-1 ' + focusBorderColorF
		}`}
		on:input={handleInput}
		{placeholder}
	/>

	{#if isLoading}
		<div class="absolute right-0 w-10 h-10 flex items-center justify-center top-0 z-10">
			<div
				class={`inline-block border-t-2 border-t-current border-r-2 border-r-current border-b-2 border-b-transparent border-l-2 border-l-transparent animate-loading-fast rounded-full w-4 h-4 text-current`}
			/>
		</div>
	{/if}
</div>
