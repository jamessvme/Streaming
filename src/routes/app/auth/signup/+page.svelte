<script lang="ts">
    import Avatar from "$lib/components/core/Avatar.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import Input from "$lib/components/core/Input.svelte";
    import Link from 'svelte-link';
</script>

<div class="max-w-[1200px] mx-auto min-h-[100vh] flex">
    <!-- left side -->
    <div class="hidden md:flex flex-col w-1/2 min-h-full bg-orange-500 px-12 my-10 text-white">
        <div class="flex items-center h-24">
            <span class="text-4xl font-bold italic">Flogram</span>
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
        <div class="flex items-center w-full mx-auto min-h-full px-8 py-48">
            <div class="flex flex-col gap-8 w-full">
                <div class="flex flex-col text-center gap-2">
                    <span class="font-semibold text-3xl leading-10">Create your account</span>
    
                    <div class="text-gray-700 flex items-center justify-center">
                        Do have already account?
                        <Link href="/app/auth/signin">
                            <Button colorScheme="orange" variant="link">Sign in</Button>
                        </Link>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <!-- email -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Email</span>
                        <Input type="text" placeholder="Enter your email" />
                    </div>

                    <!-- username -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">User name</span>
                        <Input type="text" placeholder="Enter your username" />
                    </div>

                    <!-- password -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Password</span>
                        <Input type="password" placeholder="Enter your password" />
                    </div>

                    <!-- confirm password -->
                    <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium text-gray-700">Confirm Password</span>
                        <Input type="password" placeholder="Confirm your password" />
                    </div>
                </div>

                <!-- SignUp button -->
                <Button colorScheme="orange" fullWidth>Sign up</Button>
            </div>
        </div>
    </div>
</div>