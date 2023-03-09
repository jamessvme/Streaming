<script lang="ts">
	import Avatar from '$lib/components/core/Avatar.svelte';
	import Button from '$lib/components/core/Button.svelte';
	import Input from '$lib/components/core/Input.svelte';
	import Checkbox from '$lib/components/core/Checkbox.svelte';
	import FormErrorMessage from '$lib/components/core/FormErrorMessage.svelte';
	import Link from 'svelte-link';
	import { form, field } from 'svelte-forms';
	import { required } from 'svelte-forms/validators';
	import axios from 'axios';
	import { env } from '$env/dynamic/public';
	import { toasts } from 'svelte-toasts';
	import { theme } from '$lib/store/theme';
	import { onMount } from 'svelte';
	let mode: string = 'dark';
	let isRemember = false;
	let isLoading = false;

	const usernameF = field('username', '', [required()]);
	const passwordF = field('password', '', [required()]);

	const signinForm = form(usernameF, passwordF);

	const handleSignin = async () => {
		usernameF.validate();
		passwordF.validate();

		if ($signinForm.dirty && $signinForm.valid) {
			try {
				isLoading = true;
				const response = await axios.post(`${env.PUBLIC_FLOGRAM_API_URL}/auth/signin`, {
					usernameOrEmail: $usernameF.value,
					password: $passwordF.value
				});

				const access_token = response.data.access_token;
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem('access_token', access_token);
				}

				toasts.add({
					title: 'Authentication Success!',
					description: '',
					duration: 3000, // 0 or negative to avoid auto-remove
					placement: 'bottom-right',
					showProgress: true,
					type: 'success',
					theme: 'dark',
					onClick: () => {},
					onRemove: () => {}
				});

				if (typeof window !== 'undefined') {
					window.location.href = '/app/repo';
				}

				isLoading = false;
			} catch (error: any) {
				isLoading = false;
				if (error.response.status === 404) {
					toasts.add({
						title: 'Authentication failed!',
						description: 'Please check your username and password',
						duration: 3000, // 0 or negative to avoid auto-remove
						placement: 'bottom-right',
						showProgress: true,
						type: 'warning',
						theme: 'dark',
						onClick: () => {},
						onRemove: () => {}
					});
				}
			}
		}
	};
	onMount(() => {
		theme.subscribe((value) => (mode = value));
	});
</script>

<div class="dark:bg-gray-900 max-w-[1200px] mx-auto min-h-[100vh] flex flex-col md:flex-row">
	<!-- left side -->
	<div
		class="dark:bg-slate-700 hidden md:flex flex-col w-1/2 min-h-full bg-orange-500 px-12 my-10 text-white"
	>
		<div class="flex items-center h-24">
			<Link href="/">
				<span class="text-4xl font-bold italic cursor-pointer">Flogram</span>
			</Link>
		</div>

		<div class="flex items-center grow">
			<div class="flex flex-col gap-10">
				<div class="flex flex-col gap-10">
					<span class="font-semibold text-5xl leading-[3.75rem] tracking-tight"
						>Start making your dreams come true</span
					>
					<p class="text-xl">
						Create an account and discover the worlds' best perfomance language.
					</p>
				</div>

				<div class="flex items-center">
					<div class="flex items-center">
						<Avatar
							src="https://avatars.githubusercontent.com/u/1498338?s=20?v=4"
							alt=""
							size="md"
						/>
						<Avatar
							src="https://avatars.githubusercontent.com/u/11416855?s=20?v=4"
							alt=""
							size="md"
						/>
						<Avatar
							src="https://avatars.githubusercontent.com/u/51176044?s=20?v=4"
							alt=""
							size="md"
						/>
						<Avatar
							src="https://avatars.githubusercontent.com/u/104041595?s=20?v=4"
							alt=""
							size="md"
						/>
					</div>

					<span class="ml-3">Joined 10,000+ engineers and sponsors</span>
				</div>
			</div>
		</div>

		<div class="flex items-center h-24">
			<span class="">copyright @2022 Launched by Flogram team</span>
		</div>
	</div>

	<!-- right side -->
	<div class="flex flex-col w-full md:w-1/2 md:min-h-full md:px-12 my-10">
		<div class="flex items-center w-full mx-auto min-h-full px-8 md:py-48">
			<div class="dark:text-gray-100 flex flex-col gap-8 w-full">
				<div class="flex flex-col text-center gap-2">
					<span class="font-semibold text-3xl leading-10">Log in to your account</span>

					<div class="dark:text-gray-500 text-gray-700 flex items-center justify-center">
						Don't have an account?
						<!-- <Link href="/app/auth/signup">
							<Button colorScheme={mode === 'dark' ? 'gray500' : 'orange'} variant="link"
								>Sign up</Button
							>
						</Link> -->
						<Link href="/app/auth/signup" class="dark:text-gray-100 ml-3">Sign up</Link>
					</div>
				</div>

				<div class="flex flex-col gap-5">
					<!-- username -->
					<div class="flex flex-col gap-1">
						<span class="dark:text-gray-500 text-sm font-medium text-gray-700">UsernameOrEmail</span
						>
						<Input
							type="text"
							placeholder="Enter your username"
							bind:value={$usernameF.value}
							isInvalid={$signinForm.hasError('username.required')}
						/>
						{#if !$signinForm.valid}
							{#if $signinForm.hasError('username.required')}
								<FormErrorMessage>Username is required</FormErrorMessage>
							{/if}
						{/if}
					</div>

					<!-- password -->
					<div class="flex flex-col gap-1">
						<span class="dark:text-gray-500 text-sm font-medium text-gray-700">Password</span>
						<Input
							type="password"
							placeholder="Enter your password"
							bind:value={$passwordF.value}
							isInvalid={$signinForm.hasError('password.required') ||
								$signinForm.hasError('password.between')}
						/>
						{#if !$signinForm.valid}
							{#if $signinForm.hasError('password.required')}
								<FormErrorMessage>Password is required</FormErrorMessage>
							{/if}
						{/if}
					</div>
				</div>

				<!-- remember & forgot password -->
				<div class="flex justify-between">
					<Checkbox bind:value={isRemember} colorScheme="orange">Remember me</Checkbox>
					<!-- <Button colorScheme="orange" variant="link">Forgot password</Button> -->
				</div>

				<!-- SignIn button -->
				<Button
					colorScheme={mode === 'dark' ? 'blue50' : 'orange'}
					fullWidth
					handleClick={handleSignin}
					{isLoading}>Log in</Button
				>
			</div>
		</div>
	</div>

	<!-- Image -->
	<div class="flex flex-1 md:hidden">
		<img
			src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
			class="object-cover min-w-full"
			alt=""
		/>
	</div>
</div>
