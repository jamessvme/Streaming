<script lang="ts">
    import { onMount } from 'svelte';
    import Link from 'svelte-link';
    import Button from '$lib/components/core/Button.svelte';
    import IconButton from '$lib/components/core/IconButton.svelte';
    import Badge from '$lib/components/core/Badge.svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faSearch, faMoon, faHeart, faSun, faSignIn } from '@fortawesome/free-solid-svg-icons';
    import { theme } from '$lib/store/theme';
    import { isAuthenticated as authenticated } from '$lib/store/authenticate';

    let mode = 'light';
    let isAuthenticated = false;

    $: path = isAuthenticated ? "#" : "";

    const toggle = () => {
        theme.update(theme => theme === 'light' ? 'dark' : 'light');
        console.log('toggle');
    }

    onMount(() => {
        theme.subscribe(value => mode = value);
        authenticated.subscribe(value => isAuthenticated = value);
    })
</script>

<div class="sticky top-0 z-10 bg-white left-0 right-0 w-full transition opacity-90">
    <div class="h-[72px] max-w-8xl mx-auto">
        <div class="flex items-center justify-between w-full h-full px-6">
            <!-- Logo -->
            <div class="flex items-center">
                <Link href="/">
                    <span class="text-2xl text-orange-500 font-bold italic">
                        <span class="hidden md:block">Flogram</span>
                        <span class="block md:hidden">F</span>
                    </span>
                </Link>
            </div>

            <!-- Left side menu -->
            <div class="flex items-center justify-end w-full text-gray-400 max-w-2xl">
                <div class="hidden sm:block">
                    <Button variant="outline" colorScheme="gray" fullWidth>
                        <Fa size="sm" icon={faSearch} />
                        <span class="flex items-center w-full ml-3">
                            <p class="text-left flex-1">Search the docs</p>
                            <Badge colorScheme='orange'>Ctrl + Space</Badge>
                        </span>
                    </Button>
                </div>

                <!-- social button groups -->
                <div class="hidden md:flex items-center px-8 gap-5">
                    <Link href="" class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition">
                        <i class="fa fa-github leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
                    </Link>

                    <Link href="" class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition">
                        <i class="fa fa-discord-alt leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
                    </Link>

                    <Link href="" class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition">
                        <i class="fa fa-youtube-play leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
                    </Link>

                    <Link href="" class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition">
                        <i class="fa fa-facebook-square leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
                    </Link>

                    <Link href="" class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition">
                        <i class="fa fa-download leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
                    </Link>
                </div>

                <!-- Dark/Light & Sponser & signin/signup -->
                <div class="flex items-center gap-2">
                    <IconButton variant="ghost" icon={mode == 'light' ? faMoon : faSun} handleClick={toggle} />
                    <Button colorScheme="orange" leftIcon={faHeart}>Sponsor</Button>
                    <Link href="/app/auth/signin">
                        <Button colorScheme="orange" variant="ghost" leftIcon={faSignIn} >
                            {#if isAuthenticated}
                                Logout
                            {:else}
                                Login
                            {/if}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>