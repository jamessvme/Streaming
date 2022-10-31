<script lang="ts">
	import { onMount } from "svelte";
    import Link from "svelte-link";
    import LibraryCard from "$lib/components/pages/repo/LibraryCard.svelte";
    import Input from "$lib/components/core/Input.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
    import type { LibraryType } from "../../../../types/Library";
    import axios from "axios";
    import { env } from '$env/dynamic/public';
    import { libraries } from "$lib/store/libraries";

    onMount(async () => {
        try {
            libraries.set([]);

            const response = await axios.get<LibraryType[]>(`${env.PUBLIC_FLOGRAM_API_URL}/libraries/`);

            libraries.set(response.data);
        } catch (error) {
            libraries.set([]);
        }
    });

    console.log($libraries);
</script>

<div class="flex flex-col gap-5">
    <!-- top side -->
    <div class="flex items-center justify-between">
        <div class="flex gap-5">
            <Input placeholder="Finad a library..." />
        </div>

        <Link href="/app/repo/create">
            <Button colorScheme="orange" leftIcon={faBookAtlas}>Create New Library</Button>
        </Link>
    </div>
    <!-- library list -->
    <div class="grid lg:grid-cols-2 gap-5">
        {#each $libraries as library}
        <div>
            <LibraryCard library={library} />
        </div>
        {/each}
    </div>
</div>