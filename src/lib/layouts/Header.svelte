<script lang="ts">
    import { onMount } from 'svelte';
    import Link from 'svelte-link';
    import Button from '$lib/components/core/Button.svelte';
    import IconButton from '$lib/components/core/IconButton.svelte';
    import Badge from '$lib/components/core/Badge.svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faSearch, faMoon, faHeart, faSun, faSignIn, faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
    import { theme } from '$lib/store/theme';
    import { isAuthenticated as authenticated } from '$lib/store/authenticate';

    let mode = 'light';
    let isAuthenticated = false;

    const toggle = () => {
        theme.update(theme => theme === 'light' ? 'dark' : 'light');
        console.log('toggle');
    }

    const logout = () => {
        if(typeof localStorage !== 'undefined' && typeof location !== 'undefined') {
            localStorage.removeItem("access_token");
            location.reload();
        }
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
            <div class="flex gap-5 items-center justify-end w-full text-gray-400 max-w-2xl">
                <div class="hidden sm:block">
                    <Button variant="outline" colorScheme="gray" fullWidth>
                        <Fa size="sm" icon={faSearch} />
                        <span class="flex items-center w-full ml-3">
                            <p class="text-left flex-1">Search the docs</p>
                            <Badge colorScheme='orange'>Ctrl + Space</Badge>
                        </span>
                    </Button>
                </div>

                <!-- Dark/Light & Sponser & signin/signup -->
                <div class="flex items-center gap-2">
                    <IconButton variant="ghost" icon={faDownload} />
                    <IconButton variant="ghost" icon={mode == 'light' ? faMoon : faSun} handleClick={toggle} />
                    <div class="hidden md:block">
                        <Button colorScheme="orange" leftIcon={faHeart}>Sponsor</Button>
                    </div>
                    <div class="md:hidden">
                        <IconButton colorScheme="orange" icon={faHeart} />
                    </div>
                    {#if isAuthenticated}
                        <Button colorScheme="orange" variant="ghost" leftIcon={faSignIn} handleClick={() => logout()}>Logout</Button>
                    {:else}
                        <div class="flex gap-1">
                            <Link href="/app/auth/signin">
                                <div class="hidden md:block">
                                    <Button colorScheme="orange" variant="ghost" leftIcon={faSignIn}>Login</Button>
                                </div>
                                <div class="md:hidden">
                                    <IconButton colorScheme="orange" variant="ghost" icon={faSignIn} />
                                </div>
                            </Link>
                            <Link href="/app/auth/signup">
                                <div class="hidden md:block">
                                    <Button colorScheme="orange" variant="ghost" leftIcon={faUser}>Sign Up</Button>
                                </div>
                                <div class="md:hidden">
                                    <IconButton colorScheme="orange" variant="ghost" icon={faUser} />
                                </div>
                            </Link>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>