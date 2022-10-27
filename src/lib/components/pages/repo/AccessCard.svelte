<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faCheck } from '@fortawesome/free-solid-svg-icons';
    export let title = "";
    export let description = "";
    export let icon:any;
    export let isCheck = false;
    export let handleClick:any;
</script>

<div class="relative flex gap-5 {isCheck ? 'bg-orange-100/50' : 'bg-transparent'} hover:bg-orange-100/50 p-3 cursor-pointer rounded-md transition" on:click={() => handleClick()}>
    <div class="">
        <Fa icon={icon} size="40" color="gray" />
    </div>

    <div class="flex flex-col gap-3">
        <span>{title}</span>
        <span>{description}</span>
    </div>

    <!-- check mark -->
    {#if isCheck}
    <div class="absolute top-2 right-2">
        <Fa icon={faCheck} color="green" />
    </div>
    {/if}
</div>