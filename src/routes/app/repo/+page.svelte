<script lang="ts">
    import Tab from "$lib/components/core/Tab.svelte";
    import LibraryCard from "$lib/components/pages/repo/LibraryCard.svelte";
    import Input from "$lib/components/core/Input.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
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
        <div class="flex flex-col gap-5">
            <!-- top side -->
            <div class="flex items-center justify-between">
                <div class="flex gap-5">
                    <Input placeholder="Finad a library..." />
                </div>

                <Button colorScheme="orange" leftIcon={faBookAtlas}>Create New Library</Button>
            </div>
            <!-- library list -->
            <div class="grid lg:grid-cols-2 gap-5">
                {#each myLibraries as library}
                <LibraryCard library={library} />
                {/each}
            </div>
        </div>
        {/if}
        <!-- Projects -->

        <!-- Stars -->
    </div>
</div>