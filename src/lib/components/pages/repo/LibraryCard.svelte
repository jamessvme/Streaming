<script lang="ts">
    import Avatar from "svelte-avatar";
    import Badge from "$lib/components/core/Badge.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import { faCheck, faComment, faDownload } from '@fortawesome/free-solid-svg-icons';
    import type { LibraryType } from "src/routes/app/repo/types";
    import uniqolor from "uniqolor";

    export let library: LibraryType;
</script>

<div class="flex flex-col gap-5 p-5 bg-gray-100 rounded-lg">
    <!-- Main Content -->
    <div class="flex gap-5">
        <div class="w-20 h-20">
            <Avatar initials="" src="" name={library.name} size="80px" bgColor={uniqolor(library.name).color} borderRadius="10%" />
        </div>

        <!-- Desc -->
        <div class="grow flex flex-col justify-between">
            <!-- Library name -->
            <div class="font-medium text-xl">
                {library.name}
            </div>
            <!-- Library description -->
            <div class="text-gray-500">
                {library.description}
            </div>
            <!-- Library tags -->
            <div class="flex gap-2">
                {#each library.tags as tag}
                <Badge colorScheme={tag.color}>{tag.label}</Badge>
                {/each}
            </div>
        </div>

        <!-- Top badge -->
        {#if library.isTopRanked}
        <div>
            <Badge fontSize="16px" colorScheme="orange">Top Ranked</Badge>
        </div>
        {/if}
    </div>
    <!-- Action -->
    <div class="flex items-center justify-between">
        <!-- actions -->
        <div class="flex gap-2">
            <Button size="sm" leftIcon={faCheck} colorScheme="orange" variant="ghost">Like</Button>
            <Button size="sm" leftIcon={faComment} colorScheme="orange" variant="ghost">Comment</Button>
            <Button size="sm" leftIcon={faDownload} colorScheme="orange" variant="ghost">Download</Button>
        </div>

        <!-- status -->
        <div class="flex gap-5">
            <span class="text-gray-600 font-medium">{library.votes} votes</span>
            <span class="text-gray-600 font-medium">{library.downloads} downloads</span>
        </div>
    </div>
</div>