<script lang="ts">
    import Button from '$lib/components/core/Button.svelte';
    import Fa from 'svelte-fa/src/fa.svelte';

    export let title = '';
    export let description = '';
    export let icon: any = null;
</script>

<div class="bg-white w-[400px] flex flex-col gap-2 rounded-md shadow-md text-left p-10">
    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500">
        {#if icon !== null}
        <Fa icon={icon} color="white" />
        {/if}
    </div>

    <span class="mt-4 text-2xl">{title}</span>

    <p class="text-gray-500">
        {description}
    </p>

    <div class="flex justify-end">
        <Button colorScheme="orange" variant="link">Learn more...</Button>
    </div>
</div>