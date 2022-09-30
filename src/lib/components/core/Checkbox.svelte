<script type="ts">
    export let value: boolean = false;
    export let isDisabled: boolean = false;
    export let defaultChecked: boolean = false;
    export let colorScheme: string = 'blue';

    const bgColors = {
        'gray-500' : 'bg-gray-500',
        'red-500' : 'bg-red-500',
        'orange-500' : 'bg-orange-500',
        'yellow-500' : 'bg-yellow-500',
        'green-500' : 'bg-green-500',
        'teal-500' : 'bg-teal-500',
        'blue-500' : 'bg-blue-500',
        'cyan-500' : 'bg-cyan-500',
        'purple-500' : 'bg-purple-500',
        'pink-500' : 'bg-pink-500',
    }

    const borderColors = {
        'gray-500' : '!border-gray-500',
        'red-500' : '!border-red-500',
        'orange-500' : '!border-orange-500',
        'yellow-500' : '!border-yellow-500',
        'green-500' : '!border-green-500',
        'teal-500' : '!border-teal-500',
        'blue-500' : '!border-blue-500',
        'cyan-500' : '!border-cyan-500',
        'purple-500' : '!border-purple-500',
        'pink-500' : '!border-pink-500',
    }

    const handleClick = () => {
        value = !value;
    }

    type BorderColorType = typeof borderColors;
    type BgColorType = typeof bgColors;

    const colorSchemeF = `${bgColors[(colorScheme + '-500') as keyof BgColorType]} ${borderColors[(colorScheme + '-500') as keyof BorderColorType]} text-white`;
</script>

<div class={`inline-flex items-center align-middle relative ${isDisabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}`} on:click={() => !isDisabled && handleClick()}>
    <input type=checkbox bind:checked={value} disabled={isDisabled} style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; width: 1px; margin: -1px; padding: 0px; overflow: hidden; white-space: nowrap; position: absolute;">
    <span class={`${value || defaultChecked ? colorSchemeF : ''} w-4 h-4 transition-shadow duration-200 border-2 border-inherit rounded-sm text-white inline-flex items-center justify-center align-top select-none shrink-0`}>
        <div style="display: flex; align-items: center; justify-content: center; width: 12px; height: 100%; transform: none;">
            <svg viewBox="0 0 12 10" class="css-1x1o9fj" opacity="1" stroke-dashoffset="0" style="fill: none; stroke-width: 2; stroke: currentcolor; stroke-dasharray: 16;">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
        </div>
    </span>
    <span class='ml-2 select-none text-base'>
        <slot />
    </span>
</div>