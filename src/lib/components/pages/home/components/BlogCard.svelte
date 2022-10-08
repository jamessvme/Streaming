<script lang="ts">
    import Link from 'svelte-link'
    import RatioStar from '$lib/components/core/RatioStar.svelte';

    export let github_id = 0;
    export let author = "Matt";
    export let date = "";
    export let content = "";
    export let stars = 0;
</script>

<Link href="/" class="flex rounded-md shadow-md bg-white p-5">
    <div class="inline-flex shrink-0 mr-4 relative">
        <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src={`https://avatars.githubusercontent.com/u/${github_id}?s=20?v=4`} alt="Matt" />
        </div>
    </div>

    <div class="flex flex-col text-sm gap-5">
        <div class="flex flex-col gap-2">
            <span class="font-bold">{author}</span>

            <span class="text-gray-700 italic">{date}</span>
        </div>

        <p>{content}</p>

        <RatioStar stars={stars}/>
    </div>
</Link>