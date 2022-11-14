<script lang="ts">
    import Avatar from "$lib/components/core/Avatar.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import Input from "$lib/components/core/Input.svelte";
    import Link from 'svelte-link';
    import FormErrorMessage from "$lib/components/core/FormErrorMessage.svelte";
    import { form, field } from 'svelte-forms';
    import { required, email, matchField } from 'svelte-forms/validators';
    import axios from 'axios';
    import { env } from '$env/dynamic/public';
    import { toasts }  from "svelte-toasts";

    let isLoading = false;
    let isCheckingUsername = false;

    const checkUsername = () => {
        return async (username: string) => {
            isCheckingUsername = true;
            const response = await axios.get(`${env.PUBLIC_FLOGRAM_API_URL}/users`);
            const users: any[] = response.data;

            isCheckingUsername = false;
            return { valid: users.find((user: any) => user.username === username) === undefined, name: "already_taken" }
        }
    }

    const emailF = field('email', '', [required(), email()]);
    const usernameF = field('username', '', [required(), checkUsername()]);
    const passwordF = field('password', '', [required()]);
    const password2F = field('password2', '', [required(), matchField(passwordF)]);

    const signupForm = form(emailF, usernameF, passwordF, password2F);

    const handleSignup = async () => {
        emailF.validate();
        usernameF.validate();
        passwordF.validate();
        password2F.validate();

        if($signupForm.dirty && $signupForm.valid)
        {
            try {
                isLoading = true;
                const response = await axios.post(`${env.PUBLIC_FLOGRAM_API_URL}/auth/signup`, { email: $emailF.value, username: $usernameF.value, password: $passwordF.value  });

                toasts.add({
                    title: 'Registered Successfully!',
                    description: 'You account is created successfully. Please log in with your account and enjoy with Flogram!',
                    duration: 3000, // 0 or negative to avoid auto-remove
                    placement: 'bottom-right',
                    showProgress: true,
                    type: 'success',
                    theme: 'dark',
                    onClick: () => {},
                    onRemove: () => {},
                });

                if(typeof window !== 'undefined') {
                    window.location.href = "/app/auth/signin";
                }
                
                isLoading = false;
            } catch (error: any) {
                isLoading = false;
                if(error.response.status >= 400) {
                    toasts.add({
                        title: 'Error!',
                        description: 'Please check your personal information',
                        duration: 3000, // 0 or negative to avoid auto-remove
                        placement: 'bottom-right',
                        showProgress: true,
                        type: 'warning',
                        theme: 'dark',
                        onClick: () => {},
                        onRemove: () => {},
                    });
                }
            }
        }
    }
</script>

<div class="max-w-[1200px] mx-auto min-h-[100vh] flex">
    <!-- left side -->
    <div class="hidden md:flex flex-col w-1/2 min-h-full bg-orange-500 px-12 my-10 text-white">
        <div class="flex items-center h-24">
            <Link href="/">
                <span class="text-4xl font-bold italic cursor-pointer">Flogram</span>
            </Link>
        </div>

        <div class="flex items-center grow">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-10">
                    <span class="font-semibold text-5xl leading-[3.75rem] tracking-tight">Start making your dreams come true</span>
                    <p class="text-xl">Create an account and discover the worlds' best perfomance language.</p>
                </div>

                <div class="flex items-center">
                    <div class="flex items-center">
                        <Avatar src="https://avatars.githubusercontent.com/u/1498338?s=20?v=4" alt="" size="md" />
                        <Avatar src="https://avatars.githubusercontent.com/u/11416855?s=20?v=4" alt="" size="md" />
                        <Avatar src="https://avatars.githubusercontent.com/u/51176044?s=20?v=4" alt="" size="md" />
                        <Avatar src="https://avatars.githubusercontent.com/u/104041595?s=20?v=4" alt="" size="md" />
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
    <div class="flex flex-col w-full md:w-1/2 min-h-full md:px-12 my-10">
        <div class="flex items-center w-full mx-auto min-h-full px-8">
            <div class="flex flex-col gap-8 w-full">
                <div class="flex flex-col text-center gap-2">
                    <span class="font-semibold text-3xl leading-10">Create your account</span>
    
                    <div class="text-gray-700 flex items-center justify-center">
                        Do have already account?
                        <Link href="/app/auth/signin">
                            <Button colorScheme="orange" variant="link">Log in</Button>
                        </Link>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <!-- email -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Email</span>
                        <Input type="text" placeholder="Enter your email" bind:value={$emailF.value} isInvalid={$signupForm.hasError('email.required')} />
                        {#if !$signupForm.valid}
                            {#if $signupForm.hasError('email.required')}
                            <FormErrorMessage>Email is required</FormErrorMessage>
                            {:else if $signupForm.hasError('email.not_an_email')}
                            <FormErrorMessage>Email is invalid</FormErrorMessage>
                            {/if}
                        {/if}
                    </div>

                    <!-- username -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">User name</span>
                        <Input type="text" placeholder="Enter your username" bind:value={$usernameF.value} isInvalid={$signupForm.hasError('username.required')} isLoading={isCheckingUsername} />
                        {#if !$signupForm.valid}
                            {#if $signupForm.hasError('username.required')}
                            <FormErrorMessage>Username is required</FormErrorMessage>
                            {:else if $signupForm.hasError('username.already_taken')}
                            <FormErrorMessage>Username is already taken</FormErrorMessage>
                            {/if}
                        {/if}
                    </div>

                    <!-- password -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Password</span>
                        <Input type="password" placeholder="Enter your password" bind:value={$passwordF.value} isInvalid={$signupForm.hasError('password.required')} />
                        {#if !$signupForm.valid}
                            {#if $signupForm.hasError('password.required')}
                            <FormErrorMessage>Password is required</FormErrorMessage>
                            {/if}
                        {/if}
                    </div>

                    <!-- confirm password -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Confirm Password</span>
                        <Input type="password" placeholder="Confirm your password" bind:value={$password2F.value} isInvalid={$signupForm.hasError('password2.required')} />
                        {#if !$signupForm.valid}
                            {#if $signupForm.hasError('password.required')}
                            <FormErrorMessage>Confirm password is required</FormErrorMessage>
                            {:else if $signupForm.hasError('password2.match_field')}
                            <FormErrorMessage>Password should be matched</FormErrorMessage>
                            {/if}
                        {/if}
                    </div>
                </div>

                <!-- SignUp button -->
                <Button colorScheme="orange" fullWidth handleClick={handleSignup} isLoading={isLoading} disabled={isLoading}>Sign up</Button>
            </div>
        </div>
    </div>
</div>