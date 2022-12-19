<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import {
		isAuthenticated as authenticated,
		isAuthenticating as authenticating
	} from '$lib/store/authenticate';
	import { onMount, beforeUpdate } from 'svelte';

	let isAuthenticated = false;
	let isAuthenticating = false;

	authenticated.subscribe((value) => (isAuthenticated = value));
	authenticating.subscribe((value) => (isAuthenticating = value));
</script>

<div class="dark:bg-gray-900 min-h-screen">
	{#if isAuthenticating}
		<div class="w-full flex items-center justify-center">
			<div class="w-10 h-10">
				<img src="/img/loading.svg" alt="loading" />
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
