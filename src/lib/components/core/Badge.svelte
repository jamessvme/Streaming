<script lang="ts">
	export let colorScheme = 'gray';
	export let variant = 'default';
	export let fontSize = '0.75rem';

	const schemes = {
		gray: 'bg-gray-900 text-gray-800',
		gray600: 'text-[#a0aec0]',
		red: 'bg-red-100 text-red-800',
		orange: 'bg-orange-100 text-orange-800',
		yellow: 'bg-yellow-100 text-yellow-800',
		green: 'bg-green-100 text-green-800',
		teal: 'bg-teal-100 text-teal-800',
		blue: 'bg-blue-100 text-blue-800',
		cyan: 'bg-cyan-100 text-cyan-800',
		purple: 'bg-purple-100 text-purple-800',
		pink: 'bg-pink-100 text-pink-800'
	};

	const borders = {
		gray: 'border border-gray-500',
		red: 'border border-red-500',
		orange: 'border border-orange-500',
		yellow: 'border border-yellow-500',
		green: 'border border-green-500',
		teal: 'border border-teal-500',
		blue: 'border border-blue-500',
		cyan: 'border border-cyan-500',
		purple: 'border border-purple-500',
		pink: 'border border-pink-500'
	};

	const bgColors = {
		'gray-600': '!bg-gray-600',
		'red-600': '!bg-red-600',
		'orange-600': '!bg-orange-600',
		'yellow-600': '!bg-yellow-600',
		'green-600': '!bg-green-600',
		'teal-600': '!bg-teal-600',
		'blue-600': '!bg-blue-600',
		'cyan-600': '!bg-cyan-600',
		'purple-600': '!bg-purple-600',
		'pink-600': '!bg-pink-600',
		'gray-900': '!bg-gray-900',
		'white-600': '!bg-white'
	};

	const textColors = {
		'gray-700': '!text-gray-700',
		'red-700': '!text-red-700',
		'orange-700': '!text-orange-700',
		'yellow-700': '!text-yellow-700',
		'green-700': '!text-green-700',
		'teal-700': '!text-teal-700',
		'blue-700': '!text-blue-700',
		'cyan-700': '!text-cyan-700',
		'purple-700': '!text-purple-700',
		'pink-700': '!text-pink-700',
		'gray-900': '!text-gray-900'
	};

	type ColorType = typeof schemes;
	type BorderType = typeof borders;
	type BGColorType = typeof bgColors;
	type TextColorType = typeof textColors;

	const variants = {
		default: '',
		outline: `${borders[colorScheme as keyof BorderType]}`,
		solid: `${bgColors[(colorScheme + '-600') as keyof BGColorType]} !text-white`,
		subtle: `${textColors[(colorScheme + '-700') as keyof TextColorType]}`
	};

	type VariantType = typeof variants;

	const colorSchemeF = schemes[colorScheme as keyof ColorType];
	const variantF = variants[variant as keyof VariantType];
</script>

<div
	class={`inline-block whitespace-nowrap align-middle px-1 uppercase text-xs rounded-sm font-bold ${colorSchemeF} ${variantF}`}
	style={`font-size: ${fontSize} !important`}
>
	<slot />
</div>
