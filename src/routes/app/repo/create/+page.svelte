<script lang="ts">
    import Avatar from 'svelte-boring-avatars';
    import Link from "svelte-link";
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faBookAtlas, faLock, faPlus, faInfo, faCancel } from '@fortawesome/free-solid-svg-icons';
    import AccessCard from "$lib/components/pages/repo/AccessCard.svelte";
    import Input from "$lib/components/core/Input.svelte";
    import FormErrorMessage from '$lib/components/core/FormErrorMessage.svelte';
    import Divider from "$lib/components/core/Divider.svelte";
    import Checkbox from '$lib/components/core/Checkbox.svelte';
    import { current_user } from "$lib/store/user";
    import type { User } from "$lib/types/User";
	import Button from '$lib/components/core/Button.svelte';
    import axios from "axios";
    import { env } from '$env/dynamic/public';
    import { form, field } from 'svelte-forms';
    import { required } from 'svelte-forms/validators';
    import { toasts }  from "svelte-toasts";

    let user:User;
    let isPublic = false;
    let isAddReadme = false;
    let isLoading = false;

    current_user.subscribe(value => user = value);

    const libraryNameF = field('libraryName', '', [required()]);
    const libraryDescription = field('libraryDescription', '', []);

    const LibraryCreateForm = form(libraryNameF, libraryDescription);

    const handleCreate = async () => {
        libraryNameF.validate();

        if($LibraryCreateForm.dirty && $LibraryCreateForm.valid)
        {
            try {
                isLoading = true;

                const response = await axios.post(`${env.PUBLIC_FLOGRAM_API_URL}/libraries/`, { name: $libraryNameF.value, description: $libraryDescription.value, isPublic: isPublic, ownerId: user.userId });
                toasts.add({
                    title: 'Create Success!',
                    description: '',
                    duration: 3000, // 0 or negative to avoid auto-remove
                    placement: 'bottom-right',
                    showProgress: true,
                    type: 'success',
                    theme: 'dark',
                    onClick: () => {},
                    onRemove: () => {},
                });

                isLoading = false;
            } catch {
                isLoading = false;
            }
        }
    }
</script>

<div class="max-w-3xl p-5 mx-auto">
    <div class="flex flex-col gap-5">
        <!-- Head -->
        <div class="flex flex-col">
            <div class="text-2xl">
                Create a new Library
            </div>

            <p class="flex text-gray-600">A library contains all flo files and modules. Please upload your flo library file.</p>
        </div>

        <Divider />

        <!-- Library name -->
        <div class="flex gap-5">
            <div class="flex flex-col gap-1">
                <span class="text-gray-800">Owner *</span>
                <div class="flex h-10 items-center gap-3">
                    <Avatar
                        name="Maria Mitchell"
                        variant="bauhaus"
                        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                        size={20}
                    />
                    <span>{user && user.username} /</span>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-800">Library name *</span>
                <Input placeholder="Enter a new library name" bind:value={$libraryNameF.value} isInvalid={$LibraryCreateForm.hasError("libraryName.required")} />
                {#if !$LibraryCreateForm.valid}
                    {#if $LibraryCreateForm.hasError('libraryName.required')}
                    <FormErrorMessage>Name is required</FormErrorMessage>
                    {/if}
                {/if}
            </div>
        </div>

        <!-- Library description -->
        <div class="flex flex-col gap-1">
            <span class="text-gray-800">Description <span class="text-sm text-gray-500">(optional)</span></span>
            <Input placeholder="Enter library description" bind:value={$libraryDescription.value} />
        </div>

        <Divider />

        <!-- Access -->
        <div class="flex flex-col gap-5">
            <AccessCard icon={faLock} title="Private" description="Anyone on the internet can see this repository. You choose who can commit." isCheck={!isPublic} handleClick={() => isPublic = false} />
            <AccessCard icon={faBookAtlas} title="Public" description="You choose who can see and commit to this repository." isCheck={isPublic} handleClick={() => isPublic = true} />
        </div>

        <Divider />

        <!-- Readme file -->
        <div class="flex flex-col gap-2">
            <Checkbox bind:value={isAddReadme} colorScheme="orange">Add a readme file</Checkbox>
            <span class="indent-6 text-sm text-gray-500">This is where you can write a long description for your project.</span>
        </div>

        <Divider />

        <!-- info -->
        <div class="flex items-center gap-2">
            <Fa icon={faInfo} color="gray" size="10" />
            <span class="text-sm text-gray-500">You are creating a {isPublic ? "public" : "private"} library in your work space.</span>
        </div>

        <Divider />

        <div class="flex gap-2">
            <Button colorScheme="orange" variant="outline" leftIcon={faPlus} handleClick={handleCreate} isLoading={isLoading}>Create Library</Button>
            <Link href="/app/repo">
                <Button colorScheme="orange" variant="ghost" leftIcon={faCancel} >Cancel</Button>
            </Link>
        </div>
    </div>
</div>