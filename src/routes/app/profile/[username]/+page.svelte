<script lang="ts">
	import Button from '$lib/components/core/Button.svelte';
	import Input from '$lib/components/core/Input.svelte';
	import axios from 'axios';
	import { current_user } from '$lib/store/user';
	import type { User } from '$lib/types/User';
	import { required, matchField, email } from 'svelte-forms/validators';
	import FormErrorMessage from '$lib/components/core/FormErrorMessage.svelte';
	import { form, field } from 'svelte-forms';
	import { env } from '$env/dynamic/public';
	import { toasts } from 'svelte-toasts';
	import { onMount } from 'svelte';
	import { theme } from '$lib/store/theme';
	let user: User;
	let isLoading = false;
	let isCheckingUsername = false;
	let isEditable: boolean = false;
	let mode: string = 'dark';

	const checkUsername = () => {
		return async (username: string) => {
			isCheckingUsername = true;
			const response = await axios.post(
				`${env.PUBLIC_FLOGRAM_API_URL}/users/check-username-duplicate`,
				{ username }
			);

			isCheckingUsername = false;
			return {
				valid: !response.data,
				name: 'Already_taken'
			};
		};
	};

	current_user.subscribe((value) => (user = value));

	const emailF = field('email', '', [(required(), email())]);
	const usernameF = field('username', '', [required(), checkUsername()]);
	const passwordF = field('password', '', [required()]);
	const password2F = field('password2', '', [required(), matchField(passwordF)]);

	const changeEditable = (): boolean => (isEditable = !isEditable);

	const profileForm = form(emailF, usernameF, passwordF, password2F);

	const handleProfileUpdate = async () => {
		emailF.validate();
		usernameF.validate();
		passwordF.validate();
		password2F.validate();

		{
			try {
				const response = await axios.put(`${env.PUBLIC_FLOGRAM_API_URL}/users/profile/update`, {
					email: $emailF.value,
					username: $usernameF.value,
					password: $passwordF.value
				});

				toasts.add({
					title: 'Successfully updated!',
					description:
						'You account is updated successfully. Please log in with your updated account and enjoy with Flogram!',
					duration: 3000, // 0 or negative to avoid auto-remove
					placement: 'bottom-right',
					showProgress: true,
					type: 'success',
					theme: 'dark',
					onClick: () => {},
					onRemove: () => {}
				});

				if (typeof window !== 'undefined') {
					localStorage.removeItem('access_token');
					window.location.href = '/app/auth/signin';
				}

				isLoading = false;
			} catch (error: any) {
				isLoading = false;
				if (error.response.status >= 400) {
					toasts.add({
						title: 'Error!',
						description: 'Please check your personal information',
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

<div class="">
	<div
		class="dark:text-gray-100 max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
	>
		<!--Main Col-->
		<div
			id="profile"
			class="dark:bg-slate-700 w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
		>
			{#if !isEditable}
				<div class="p-4 md:p-12 text-center lg:text-left">
					<!-- Image for mobile view-->
					<div
						class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
						style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"
					/>

					<h1 class="text-3xl font-bold pt-8 lg:pt-0">{user?.username}</h1>
					<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
					<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
						<svg
							class="h-4 fill-current text-green-700 pr-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							><path
								d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
							/></svg
						> Senior software engineer
					</p>
					<p class="pt-8 text-sm">You can edit and add your profile credential</p>

					<div class="pt-12 pb-8">
						<button
							on:click={() => changeEditable()}
							class="dark:bg-[#38b2ac] bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
						>
							Edit profile
						</button>
					</div>

					<!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
				</div>
			{/if}
			{#if isEditable}
				<div class="p-4 md:p-12 text-center lg:text-left">
					<div class="flex flex-col gap-5">
						<!-- email -->
						<div class="flex flex-col gap-1">
							<span class="dark:text-gray-100 text-sm font-medium text-gray-700">Email</span>
							<Input
								type="text"
								placeholder="Enter your email"
								bind:value={$emailF.value}
								isInvalid={$profileForm.hasError('email.required')}
							/>
							{#if !$profileForm.valid}
								{#if $profileForm.hasError('email.required')}
									<FormErrorMessage>Email is required</FormErrorMessage>
								{:else if $profileForm.hasError('email.not_an_email')}
									<FormErrorMessage>Email is invalid</FormErrorMessage>
								{/if}
							{/if}
						</div>

						<!-- username -->
						<div class="flex flex-col gap-1">
							<span class="dark:text-gray-100 text-sm font-medium text-gray-700">User name</span>
							<Input
								type="text"
								placeholder="Enter your username"
								bind:value={$usernameF.value}
								isInvalid={$profileForm.hasError('username.required')}
								isLoading={isCheckingUsername}
							/>
							{#if !$profileForm.valid}
								{#if $profileForm.hasError('username.required')}
									<FormErrorMessage>Username is required</FormErrorMessage>
								{:else if $profileForm.hasError('username.already_taken')}
									<FormErrorMessage>Username is already taken</FormErrorMessage>
								{/if}
							{/if}
						</div>

						<!-- password -->
						<div class="flex flex-col gap-1">
							<span class="dark:text-gray-100 text-sm font-medium text-gray-700">Password</span>
							<Input
								type="password"
								placeholder="Enter your password"
								bind:value={$passwordF.value}
								isInvalid={$profileForm.hasError('password.required')}
							/>
							{#if !$profileForm.valid}
								{#if $profileForm.hasError('password.required')}
									<FormErrorMessage>Password is required</FormErrorMessage>
								{/if}
							{/if}
						</div>

						<!-- confirm password -->
						<div class="flex flex-col gap-1">
							<span class="dark:text-gray-100 text-sm font-medium text-gray-700"
								>Confirm Password</span
							>
							<Input
								type="password"
								placeholder="Confirm your password"
								bind:value={$password2F.value}
								isInvalid={$profileForm.hasError('password2.required')}
							/>
							{#if !$profileForm.valid}
								{#if $profileForm.hasError('password.required')}
									<FormErrorMessage>Confirm password is required</FormErrorMessage>
								{:else if $profileForm.hasError('password2.match_field')}
									<FormErrorMessage>Password should be matched</FormErrorMessage>
								{/if}
							{/if}
						</div>
					</div>
				</div>

				<div class="flex justify-between p-6">
					<Button
						colorScheme={mode === 'light' ? 'orange' : 'blue50'}
						handleClick={handleProfileUpdate}
						{isLoading}
						disabled={isLoading}>Update</Button
					>
					<button
						on:click={() => changeEditable()}
						class="dark:bg-gray-100 text-black underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Cancel</button
					>
				</div>
			{/if}
		</div>

		<!--Img Col-->
		<div class="w-full lg:w-2/5">
			<!-- Big profile image for side bar (desktop) -->
			<img
				src="https://source.unsplash.com/MP0IUfwrn0A"
				class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
				alt="unsplash"
			/>
			<!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
		</div>
	</div>
</div>
