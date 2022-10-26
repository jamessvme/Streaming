<script lang="ts">
    import Tab from "$lib/components/core/Tab.svelte";
    import LibraryCard from "$lib/components/pages/repo/LibraryCard.svelte";
    import type { LibraryType } from "./types";

    const tabs = ["Overview", "Libraries", "Projects", "Stars"];
    let currentTab = 0;
    const myLibraries: LibraryType[] = [
        {
            id: 1,
            name: "Math",
            description: "This is Math library. This library will be based of every libraries.",
            tags: [
                {
                    label: "base",
                    color: "gray"
                },
                {
                    label: "highlight",
                    color: "orange"
                },
            ],
            isTopRanked: true,
            votes: 34,
            downloads: 234
        },
        {
            id: 2,
            name: "Random Color",
            description: "This is Random Color library. A tiny script for generating attractive random colors.",
            tags: [
                {
                    label: "base",
                    color: "gray"
                },
                {
                    label: "random",
                    color: "red"
                },
            ],
            isTopRanked: true,
            votes: 20031,
            downloads: 3000201
        }
    ];
</script>

<div class="mt-6 w-full">
    <Tab tabs={tabs} bind:currentTab={currentTab} />

    <!-- Tab content -->
    <div class="mt-5 p-5">
        <!-- Overview -->

        <!-- Libraries -->
        {#if currentTab === 1}
        <div class="grid lg:grid-cols-2 gap-5">
            {#each myLibraries as library}
            <LibraryCard library={library} />
            {/each}
        </div>
        {/if}
        <!-- Projects -->

        <!-- Stars -->
    </div>
</div>