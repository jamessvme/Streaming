<script lang="ts">
	import { onMount } from "svelte";
    import Link from "svelte-link";
    import Button from '$lib/components/core/Button.svelte';
    import Tab from '$lib/components/core/Tab.svelte';
    import Badge from '$lib/components/core/Badge.svelte';
    import IconButton from '$lib/components/core/IconButton.svelte';
    import Avatar from 'svelte-boring-avatars';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faDownload, faThumbsUp, faLock, faChevronDown, faHistory, faFolder, faFile, faF } from '@fortawesome/free-solid-svg-icons';
    import { current_user } from "$lib/store/user";
    import { ListType } from "$lib/types/List";
    import type { List } from "$lib/types/List";
    import type { User } from "$lib/types/User";
    import axios from "axios";
    import { env } from '$env/dynamic/public';

    const tabs = ["Code", "Issues", "Settings"];
    let user:User;
    let currentTab = -1;
    let lists: List[] = [];
    let isLoading = true;

    if(typeof localStorage !== 'undefined') {
        currentTab = localStorage.getItem("library_tab") === null ? 0 : parseInt(localStorage.getItem("library_tab") as string);
    }

    current_user.subscribe(value => user = value);

    /** @type {import('./$types').PageData} */
    export let data: any;

    $: {
        data;

        fetchList();
    }

    const fetchList = async () => {
        try {
            isLoading = true;
            const response = await axios.get(`${env.PUBLIC_FLOGRAM_API_URL}/libraries/list/${data.name}/${data.path === '' ? 'root' : data.path.replace("/", "-")}`);

            if(response.data.isEmpty) {
                lists = [];
            } else lists = response.data;

            isLoading = false;
        } catch (error) {
            isLoading = false;
        }
    }

    onMount(async () => {
        fetchList();
    });
</script>
  
<div class="flex flex-col">
    <!-- top tool bar -->
    <div class="flex gap-4 py-4 px-8">
        <!-- repo link -->
        <div class="flex-auto max-w-full">
            <div class="flex h-full break-words items-center flex-wrap">
                <Fa icon={faLock} color="orange" />
                <span class="mx-2">
                    <Link href={`/app/repo`} class="text-orange-500 text-xl hover:underline">
                        {user?.username}
                    </Link>
                </span>
                <span class="mx-1 flex items-center self-stretch text-gray-500">
                    /
                </span>
                <span class="mx-2">
                    <Link href={`/app/repo/${data?.name}`} class="text-orange-500 text-xl hover:underline">
                        {data?.name}
                    </Link>
                </span>
            </div>
        </div>

        <!-- actions -->
        <div class="shrink-0 flex items-center gap-5">
            <div>
                <Badge colorScheme="green" variant="subtle">30 views</Badge>
                <Badge colorScheme="cyan" variant="subtle">203 downloads</Badge>
            </div>
            <div class="flex gap-1">
                <IconButton colorScheme="cyan" variant="ghost" icon={faDownload} />
                <IconButton colorScheme="green" variant="ghost" icon={faThumbsUp} />
            </div>
        </div>
    </div>

    <!-- Tab menu -->
    <div class="px-8">
        <Tab tabs={tabs} bind:currentTab={currentTab} localStorageName="library"></Tab>

        <div class="mt-6">
            <!-- Code section -->
            <div class="flex w-full">
                <!-- library structure -->
                <div class="flex flex-col gap-5 w-3/4">
                    <!-- actions -->
                    <div class="flex gap-2 justify-end">
                        <Button colorScheme="orange" variant="outline" size="sm">Go to file</Button>
                        <Button colorScheme="orange" variant="outline" size="sm" rightIcon={faChevronDown}>Add file</Button>
                        <Button colorScheme="orange" size="sm" rightIcon={faChevronDown}>Code</Button>
                    </div>

                    <!-- structure -->
                    <div class="flex border rounded flex-col w-full">
                        <!-- head -->
                        <div class="relative w-full p-4 -mb-0.5 border bg-gray-100 border-gray-200 rounded-tl rounded-tr">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-2">
                                    <Avatar
                                        name={user && user.username}
                                        variant="bauhaus"
                                        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                                        size={24}
                                    />
                                    <span class="text-gray-800 font-medium hover:underline cursor-pointer">{user && user.username}</span>
                                    <!-- last commit -->
                                    <span class="text-sm text-gray-700 hover:text-blue-500 cursor-pointer">feat: add time to price chart</span>
                                </div>

                                <!-- amount of commits -->
                                <div class="group flex gap-1 items-center cursor-pointer hover:text-blue-500">
                                    <Fa icon={faHistory} />
                                    <div class="text-sm">
                                        <span class="font-medium">483</span>
                                        <span class="text-inherit">commits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- body -->
                        {#if isLoading}
                        <div class="flex justify-center items-center px-4 py-2 border -mt-0.5">
                            loading...
                        </div>
                        {:else}
                        {#each lists as list}
                        <Link href={`${window.location.href + "/" + list.name}`}>
                            <div class="flex justify-between items-center px-4 py-2 border-t -mt-0.5">
                                <div class="flex items-center gap-2">
                                    <Fa icon={list.type === ListType.FOLDER ? faFolder : faFile} color={ list.type === ListType.FOLDER ? '#14b8a6' : '#f97316' } />
                                    
                                    <span>{ list.name }</span>  
                                </div>
    
                                <span class="text-sm">{ list.lastModifiedAt }</span>
                            </div>
                        </Link>
                        {:else}
                        <div class="flex justify-center items-center px-4 py-2 border -mt-0.5">
                            There is no data.
                        </div>
                        {/each}
                        {/if}
                    </div>
                </div>

                <!-- library sidebar -->
                <div class="flex w-1/4">

                </div>
            </div>

            <!-- Issues section -->

            <!-- Settings section -->
        </div>
    </div>
</div>