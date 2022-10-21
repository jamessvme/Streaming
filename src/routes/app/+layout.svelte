<script lang="ts">
    import Header from "$lib/layouts/Header.svelte";
    import { isAuthenticated as authenticated, isAuthenticating as authenticating } from '$lib/store/authenticate';
	import { onMount, beforeUpdate } from "svelte";

    let isAuthenticated = false;
    let isAuthenticating = false;

    authenticated.subscribe(value => isAuthenticated = value);
    authenticating.subscribe(value => isAuthenticating = value);
</script>

<div>
    {#if isAuthenticating}
        <div class="w-full h-[100vh] flex items-center justify-center">
            <div class="w-10 h-10">
                <img src="/img/loading.svg" alt="loading" />
            </div>
        </div>
    {:else}
        {#if isAuthenticated && typeof window !== 'undefined' && !window.location.href.includes("auth")}
            <Header />
            <slot />
        {:else if typeof window !== 'undefined' && window.location.href.includes("auth")}
            <slot />
        {/if}
    {/if}
</div>