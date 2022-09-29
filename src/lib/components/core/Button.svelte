<script type="ts">
    export let colorScheme = 'gray';
    export let size = 'md';
    export let variant = 'soild';

    const textColors = {
        'gray-600' : 'text-gray-600',
        'red-600' : 'text-red-600',
        'orange-600' : 'text-orange-600',
        'yellow-600' : 'text-yellow-600',
        'green-600' : 'text-green-600',
        'teal-600' : 'text-teal-600',
        'blue-600' : 'text-blue-600',
        'cyan-600' : 'text-cyan-600',
        'purple-600' : 'text-purple-600',
        'pink-600' : 'text-pink-600',
    }

    const bgColors = {
        'gray-100' : 'bg-gray-100',
        'red-100' : 'bg-red-100',
        'orange-100' : 'bg-orange-100',
        'yellow-100' : 'bg-yellow-100',
        'green-100' : 'bg-green-100',
        'teal-100' : 'bg-teal-100',
        'blue-100' : 'bg-blue-100',
        'cyan-100' : 'bg-cyan-100',
        'purple-100' : 'bg-purple-100',
        'pink-100' : 'bg-pink-100',
    }

    const hoverBgColors = {
        'gray-100' : 'hover:!bg-gray-100',
        'red-100' : 'hover:!bg-red-100',
        'orange-100' : 'hover:!bg-orange-100',
        'yellow-100' : 'hover:!bg-yellow-100',
        'green-100' : 'hover:!bg-green-100',
        'teal-100' : 'hover:!bg-teal-100',
        'blue-100' : 'hover:!bg-blue-100',
        'cyan-100' : 'hover:!bg-cyan-100',
        'purple-100' : 'hover:!bg-purple-100',
        'pink-100' : 'hover:!bg-pink-100',
    }

    const activeBGColors = {
        'gray-200' : 'active:!bg-gray-200',
        'red-200' : 'active:!bg-red-200',
        'orange-200' : 'active:!bg-orange-200',
        'yellow-200' : 'active:!bg-yellow-200',
        'green-200' : 'active:!bg-green-200',
        'teal-200' : 'active:!bg-teal-200',
        'blue-200' : 'active:!bg-blue-200',
        'cyan-200' : 'active:!bg-cyan-200',
        'purple-200' : 'active:!bg-purple-200',
        'pink-200' : 'active:!bg-pink-200',
    }

    const schemes = {
        'transparent' : 'hover:bg-gray-100',
        'gray' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
        'red' : 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
        'orange' : 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
        'yellow' : 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
        'green' : 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
        'teal' : 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700',
        'blue' : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
        'cyan' : 'bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700',
        'purple' : 'bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700',
        'pink' : 'bg-pink-500 text-white hover:bg-pink-600 active:bg-pink-700',
    }

    const sizes = {
        'xs' : 'h-6',
        'sm' : 'h-8',
        'md' : 'h-10',
        'lg' : 'h-12',
    }

    type SchemeType = typeof schemes;
    type SizeType = typeof sizes;
    type VariantType = typeof variants;
    type TextColorType = typeof textColors;
    type BGColorType = typeof bgColors;
    type HoverBgColorType = typeof hoverBgColors;
    type ActiveBGColorType = typeof activeBGColors;

    const variants = {
        'solid' : '',
        'outline' : `
            bg-transparent 
            ${textColors[(colorScheme + '-600') as keyof TextColorType]} 
            ${hoverBgColors[colorScheme + '-100' as keyof HoverBgColorType]} 
            ${activeBGColors[colorScheme + '-200' as keyof ActiveBGColorType]}
            border 
            border-current
        `,
        'ghost' : `
            bg-transparent 
            ${textColors[(colorScheme + '-600') as keyof TextColorType]} 
            ${hoverBgColors[colorScheme + '-100' as keyof HoverBgColorType]} 
            ${activeBGColors[colorScheme + '-200' as keyof ActiveBGColorType]}
        `,
        'link' : `
            bg-transparent 
            hover:!bg-transparent 
            ${textColors[(colorScheme + '-600') as keyof TextColorType]} 
            hover:underline 
            decoration-current 
        `
    }

    const schemeF = schemes[colorScheme as keyof SchemeType];
    const sizeF = sizes[size as keyof SizeType];
    const variantF = variants[variant as keyof VariantType];
</script>

<div class={`
    relative 
    inline-flex 
    appearance-none 
    items-center 
    justify-center 
    select-none 
    whitespace-nowrap 
    align-middle 
    outline 
    outline-transparent 
    outline-2 
    outline-offset-2 
    leading-tight 
    rounded-md 
    px-4
    ${sizeF} 
    transition 
    cursor-pointer 
    ${schemeF} 
    ${variantF}`}
>
    <slot />
</div>