<script lang="ts">
    export let tabs: string[] = [];
    export let currentTab = 0;

    const handleClick = (i: number) => {
        currentTab = i;
    }
</script>

<div class="">
    <!-- TabList -->
    <div class="flex border-b-2 border-inherit">
        {#each tabs as tab, index}
        <div class={`flex items-center justify-center px-4 py-2 border-b-2 cursor-pointer transition ${currentTab === index ? "text-orange-500 border-current" : "border-transparent"}`} on:click={() => handleClick(index)}>
            {tab}
        </div>
        {/each}
    </div>
</div>