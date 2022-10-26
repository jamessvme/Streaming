<script lang="ts">
    import Link from 'svelte-link';
    import IconButton from '$lib/components/core/IconButton.svelte';
    import { faBell } from '@fortawesome/free-solid-svg-icons';
    import Avatar from 'svelte-boring-avatars';

    const menus = ["Issues", "Marketpalce", "Explore"];
</script>

<div class="flex justify-between px-8 py-4 text-base bg-orange-500 text-white items-center">
    <!-- lef side -->
    <div class="flex items-center gap-5">
        <!-- Logo -->
        <div class="flex items-center">
            <Link href="/app/repo">
                <span class="text-2xl font-bold italic">
                    <span class="hidden md:block">Flogram</span>
                    <span class="block md:hidden">F</span>
                </span>
            </Link>
        </div>

        <!-- Nav menu -->
        <div class="flex gap-5">
            {#each menus as menu}
            <Link href="#" class="font-semibold hover:opacity-50 transition">
                {menu}
            </Link>
            {/each}
        </div>
    </div>

    <!-- right side -->
    <div class="flex gap-3">
        <IconButton icon={faBell} colorScheme="orange"  />

        <div class="cursor-pointer hover:opacity-80 transition">
            <Avatar
                name="Maria Mitchell"
                variant="bauhaus"
                colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            />
        </div>
    </div>
</div>