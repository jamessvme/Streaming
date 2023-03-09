<script lang="ts">
	import { onMount } from 'svelte';
	import Link from 'svelte-link';
	import Button from '$lib/components/core/Button.svelte';
	import IconButton from '$lib/components/core/IconButton.svelte';
	import Badge from '$lib/components/core/Badge.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faSearch,
		faMoon,
		faHeart,
		faSun,
		faSignIn,
		faDownload,
		faUser
	} from '@fortawesome/free-solid-svg-icons';
	import { theme, setTheme, themeValue } from '$lib/store/theme';
	import { isAuthenticated as authenticated } from '$lib/store/authenticate';

	let mode = 'dark';
	let isAuthenticated = false;

	const toggle = () => {
		mode = mode == 'dark' ? 'light' : 'dark';
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', mode);
		}
	};

	const logout = () => {
		if (typeof localStorage !== 'undefined' && typeof location !== 'undefined') {
			localStorage.removeItem('access_token');
			location.reload();
		}
	};
	$: {
		mode;
		$theme = mode;
	}

	onMount(() => {
		theme.subscribe((value) => (mode = value));
		authenticated.subscribe((value) => (isAuthenticated = value));
	});
</script>

<div
	class="dark:bg-gray-900 sticky top-0 z-10 bg-white left-0 right-0 w-full transition opacity-90"
>
	<div class="h-[72px] max-w-8xl mx-auto">
		<div class="flex items-center justify-between w-full h-full px-6">
			<!-- Logo -->
			<div class="flex items-center">
				<Link href="/">
					<span class="dark:text-gray-100 text-2xl text-orange-500 font-bold italic">
						<span class="hidden md:block">Flogram</span>
						<span class="md:hidden">F</span>
					</span>
				</Link>
			</div>

			<!-- Left side menu -->
			<div class="flex gap-5 items-center justify-end w-full text-gray-400 max-w-2xl">
				<div class="hidden sm:block">
					<Button variant="outline" colorScheme={mode === 'light' ? 'slate500' : 'gray'} fullWidth>
						<Fa size="sm" icon={faSearch} />
						<span class="dark:text-[#a0aec0] flex items-center w-full ml-3 gap-2">
							<p class="text-left flex-1">Search the docs</p>
							<Badge colorScheme={mode === 'light' ? 'gray600' : 'orange'}>Ctl + Space</Badge>
						</span>
					</Button>
				</div>

				<!-- Dark/Light & Sponser & signin/signup -->
				<div class="flex items-center gap-2">
					<IconButton variant="ghost" icon={faDownload} />
					<IconButton
						variant="ghost"
						icon={mode == 'light' ? faMoon : faSun}
						handleClick={toggle}
					/>
					<div class="hidden md:block">
						<Button colorScheme={mode == 'light' ? 'orange' : 'blue50'} leftIcon={faHeart}
							>Sponsor</Button
						>
					</div>
					<div class="md:hidden">
						<IconButton colorScheme="orange" icon={faHeart} />
					</div>
					{#if isAuthenticated}
						<Link href="/app/repo">
							<Button colorScheme={mode === 'light' ? 'orange' : 'gray'} variant="ghost"
								>Main</Button
							></Link
						>
						<Button
							colorScheme={mode == 'light' ? 'orange' : 'gray'}
							variant="ghost"
							leftIcon={faSignIn}
							handleClick={() => logout()}>Logout</Button
						>
					{:else}
						<div class="flex gap-1">
							<Link href="/app/auth/signin">
								<div class="hidden md:block">
									<Button colorScheme={mode === 'light' ? 'orange' : 'hvGray'} leftIcon={faSignIn}
										>Login</Button
									>
								</div>
								<div class="md:hidden">
									<IconButton colorScheme="orange" variant="ghost" icon={faSignIn} />
								</div>
							</Link>
							<Link href="/app/auth/signup">
								<div class="hidden md:block">
									<Button colorScheme={mode === 'light' ? 'orange' : 'hvGray'} leftIcon={faUser}
										>Sign Up</Button
									>
								</div>
								<div class="md:hidden">
									<IconButton
										colorScheme={mode === 'light' ? 'orange' : 'white'}
										variant="ghost"
										icon={faUser}
									/>
								</div>
							</Link>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
