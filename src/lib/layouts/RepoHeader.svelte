<script lang="ts">
	import Link from 'svelte-link';
	import IconButton from '$lib/components/core/IconButton.svelte';
	import { faBell } from '@fortawesome/free-solid-svg-icons';
	import Dropdown from '$lib/components/core/Dropdown.svelte';
	import Avatar from 'svelte-boring-avatars';
	import Button from '$lib/components/core/Button.svelte';
	import Divider from '$lib/components/core/Divider.svelte';
	import { clickOutside } from '$lib/util/util';
	import { current_user } from '$lib/store/user';
	import type { User } from '$lib/types/User';
	import { theme } from '$lib/store/theme';
	import { onMount } from 'svelte';
	let mode: string = 'dark';
	let user: User;
	let isMenuOpen = false;

	current_user.subscribe((value) => (user = value));

	const menus = [
		{
			label: 'Issues',
			link: '#'
		},
		{
			label: 'Explore',
			link: '#'
		},
		{
			label: 'Documentation',
			link: '/app/home'
		}
	];

	const logout = () => {
		if (typeof localStorage !== 'undefined' && typeof location !== 'undefined') {
			localStorage.removeItem('access_token');
			// location.reload();
			window.location.href = '/app/auth/signin';
		}
	};

	onMount(() => {
		theme.subscribe((value) => (mode = value));
	});
</script>

<div
	class="dark:bg-gray-900 flex justify-between px-8 py-4 text-base bg-orange-500 text-white items-center"
>
	<!-- lef side -->
	<div class="flex items-center gap-5">
		<!-- Logo -->
		<div class="flex items-center">
			<Link href="/">
				<span class="text-2xl font-bold italic">
					<span class="hidden md:block">Flogram</span>
					<span class="block md:hidden">F</span>
				</span>
			</Link>
		</div>

		<!-- Nav menu -->
		<div class="flex gap-5">
			{#each menus as menu}
				<Link href={menu.link} class="font-semibold hover:opacity-50 transition">
					{menu.label}
				</Link>
			{/each}
		</div>
	</div>

	<!-- right side -->
	<div class="flex gap-3">
		<IconButton icon={faBell} colorScheme={mode === 'light' ? 'orange' : 'blue50'} />

		<div class="relative">
			<div
				class="cursor-pointer"
				use:clickOutside
				on:click={() => (isMenuOpen = !isMenuOpen)}
				on:click_outside={() => (isMenuOpen = false)}
			>
				<Avatar
					name={user && user.username}
					variant="bauhaus"
					colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
				/>
			</div>

			<Dropdown direction="right" visibility={isMenuOpen}>
				<div class="dark:bg-slate-700 flex flex-col">
					{#if user}
						<span class="dark:text-gray-100 text-orange-500 w-40 leading-9 ml-5"
							>Signed in as <b class="upppercase">{user.username}</b></span
						>
					{/if}
					<Divider />
					<Button
						colorScheme={mode === 'light' ? 'orange' : 'blue50'}
						variant="ghost"
						fullWidth
						handleClick={() => (window.location.href = `/app/profile/${user.username}`)}
						>Profile</Button
					>
					<Button
						colorScheme={mode === 'light' ? 'orange' : 'blue50'}
						variant="ghost"
						fullWidth
						handleClick={logout}>Logout</Button
					>
				</div>
			</Dropdown>
		</div>
	</div>
</div>
