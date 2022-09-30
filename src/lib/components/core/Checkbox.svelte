<script type="ts">
    export let value: boolean = false;

    const handleClick = () => {
        value = !value;
    }
</script>

<div class={`
    inline-flex 
    items-center 
    align-middle 
    relative 
    cursor-pointer`}
    on:click={() => handleClick()}
>
    <input 
        type=checkbox 
        bind:checked={value} 
        style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; width: 1px; margin: -1px; padding: 0px; overflow: hidden; white-space: nowrap; position: absolute;"
    >
    <span class={`
        svelte-checkbox 
        w-4 
        h-4 
        transition-shadow 
        duration-200 
        border-2 
        border-inherit 
        rounded-sm 
        text-white 
        inline-flex 
        items-center 
        justify-center 
        align-top 
        select-none 
        shrink-0`}
        data-checked={value}
    >
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

<style>
    .svelte-checkbox[data-checked=true] {
        @apply bg-blue-500 border-blue-500 text-white
    }
</style>