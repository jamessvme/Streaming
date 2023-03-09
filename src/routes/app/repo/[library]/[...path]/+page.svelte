<script lang="ts">
	import { onMount } from 'svelte';
	import Link from 'svelte-link';
	import { marked } from 'marked';
	import Button from '$lib/components/core/Button.svelte';
	import Tab from '$lib/components/core/Tab.svelte';
	import Badge from '$lib/components/core/Badge.svelte';
	import IconButton from '$lib/components/core/IconButton.svelte';
	import Avatar from 'svelte-boring-avatars';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { clickOutside } from '$lib/util/util';
	import {
		faDownload,
		faThumbsUp,
		faLock,
		faChevronDown,
		faHistory,
		faFolder,
		faFile,
		faPlus
	} from '@fortawesome/free-solid-svg-icons';
	import { current_user } from '$lib/store/user';
	import { ListType } from '$lib/types/List';
	import type { List } from '$lib/types/List';
	import type { User } from '$lib/types/User';
	import axios from 'axios';
	import { env } from '$env/dynamic/public';
	import { getObjectTypeFromURL, replaceSlashfromURL, removeFileTypeFromURL } from '$lib/util/util';
	import type { Commit } from '$lib/types/Commit';
	import Dropdown from '$lib/components/core/Dropdown.svelte';
	import Breadcrumbs from '$lib/components/core/Breadcrumbs.svelte';
	import { theme } from '$lib/store/theme';
	import { getFullFormatDateFromISOString } from '$lib/util/util';

	const tabs = ['Code', 'Issues', 'Settings'];
	let mode: string = 'dark';
	let user: User;
	let currentTab = -1;
	let lists: List[] = [];
	let totalCommit: number = 0;
	let lastCommit: Commit;
	let isLoading = true;
	let isFile = false;
	let source: string = '';
	let isProjectFindList = false;
	let markdown = marked(source);
	let fileList: string[] = [];
	let isDropDownShow = false;

	if (typeof localStorage !== 'undefined') {
		currentTab =
			localStorage.getItem('library_tab') === null
				? 0
				: parseInt(localStorage.getItem('library_tab') as string);
	}

	current_user.subscribe((value) => (user = value));

	/** @type {import('./$types').PageData} */
	export let data: any;

	$: {
		data;

		if (isProjectFindList) goToFile();
		else fetchList();
	}

	$: {
		source;
		markdown = marked(source);
	}

	const fetchList = async () => {
		try {
			isLoading = true;
			isFile = false;
			source = '';
			let type = '';
			if (!data.path) type = ListType.FOLDER;
			else type = getObjectTypeFromURL(data);
			const response = await axios.get(
				`${env.PUBLIC_FLOGRAM_API_URL}/libraries/list/${data.name}/${
					data.path === '' ? 'root' : replaceSlashfromURL(removeFileTypeFromURL(data, type))
				}`,
				{
					params: { type }
				}
			);
			if (typeof response.data === 'object' && response.data.type === 'file') {
				isFile = true;
				source = response.data.content;
				isLoading = false;
				return;
			}
			if (Array.isArray(response.data) && !response.data.length) {
				lists = [];
			} else lists = response.data;
			isLoading = false;
		} catch (error) {
			isLoading = false;
		}
	};

	const fetchComments = async () => {
		try {
			const response = await axios.get(
				`${env.PUBLIC_FLOGRAM_API_URL}/commits/lastcommit/${data.name}`
			);
			if (response.data.lastCommit) {
				lastCommit = response.data.lastCommit;
				totalCommit = response.data.totalCommit;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const createUrl = (locationHref: string, list: List) => {
		if (list.type === 'file') {
			if (locationHref.search(data.name + '/blob') >= 0) {
				if (locationHref.search(list.name) >= 0) {
					return locationHref;
				}
			} else {
				const str2 = data.name + (data.path ? '/' : '');
				const str3 = data.name + '/blob';
				const result1 = locationHref.replace('/tree', '/');
				const result2 = result1.replace(str2, str3);
				return result2 + '/' + list.name;
			}
		} else {
			if (locationHref.search(data.name + '/tree') < 0) {
				return locationHref + '/tree/' + list.name;
			} else {
				return locationHref + '/' + list.name;
			}
		}
	};

	const goToFile = async () => {
		try {
			isLoading = true;
			const response = await axios.get(
				`${env.PUBLIC_FLOGRAM_API_URL}/libraries/get-file-list/${data.name}`
			);
			if (response.status == 200 && response.data && response.data.length) {
				fileList = response.data;
				isProjectFindList = true;
			} else fileList = [];
			isLoading = false;
		} catch (error) {
			console.log(error);
		}
	};

	const createGoToFileUrl = (name: string): string => {
		if (typeof window !== 'undefined') {
			const url = window.location.href;
			if (url.search(name) >= 0) {
				const str = url.slice(url.search(name));
				const newUrl = url.replace(str, `${name}/find`);
				return newUrl;
			}
			return url;
		}
		return '';
	};

	const createFullURL = (key: string): string => {
		if (typeof window !== 'undefined') {
			const url = window.location.href;
			const fileUrl = key.slice(key.search('main') + 5);
			const str = url.slice(url.search(data.name));
			const newUrl = url.replace(str, `${data.name}/blob/${fileUrl}`);
			return newUrl;
		}
		return '';
	};

	onMount(async () => {
		theme.subscribe((value) => {
			mode = value;
		});
		if (data.path.search('find') >= 0) {
			isProjectFindList = true;
		}
		await fetchList();
		await fetchComments();
	});
</script>

<div class="flex flex-col">
	<!-- top tool bar -->
	<div class="flex gap-4 py-4 px-8">
		<!-- repo link -->
		<div class="flex-auto max-w-full">
			<div class="flex h-full break-words items-center flex-wrap">
				<Fa icon={faLock} color={mode === 'light' ? 'orange' : 'white'} />
				<span class="mx-2">
					<Link
						href={`/app/repo`}
						class="dark:text-gray-100 text-orange-500 text-xl hover:underline"
					>
						{user?.username}
					</Link>
				</span>
				<span class="mx-1 flex items-center self-stretch text-gray-500"> / </span>
				<span class="mx-2">
					<Link
						href={`/app/repo/${data?.name}`}
						class="dark:text-gray-100 text-orange-500 text-xl hover:underline"
					>
						{data?.name}
					</Link>
				</span>
			</div>
		</div>

		<!-- actions -->
		<!-- <div class="shrink-0 flex items-center gap-5">
			<div>
				<Badge colorScheme="green" variant="subtle">30 views</Badge>
				<Badge colorScheme="cyan" variant="subtle">203 downloads</Badge>
			</div>
			<div class="flex gap-1">
				<IconButton colorScheme="cyan" variant="ghost" icon={faDownload} />
				<IconButton colorScheme="green" variant="ghost" icon={faThumbsUp} />
			</div>
		</div> -->
	</div>

	<!-- Tab menu -->
	<div class="dark:text-gray-100 px-8">
		<Tab {tabs} bind:currentTab localStorageName="library" />

		<div class="mt-6">
			<!-- Code section -->
			<div class="flex w-full">
				<!-- library structure -->
				{#if isProjectFindList}
					{#if isLoading}
						<div class="flex items-center px-4 py-2 border -mt-0.5">loading...</div>
					{:else}
						<div class="flex flex-col gap-5 w-3/4">
							<div class="flex border rounded flex-col w-full">
								<div
									class="relative w-full p-4 -mb-0.5 border border-gray-200 rounded-tl rounded-tr"
								>
									{#each fileList as file}
										<Link href={createFullURL(file)} on:click={() => (isProjectFindList = false)}>
											<div
												class="flex justify-between items-center px-4 py-2 border-b -mt-0.5 hover:bg-sky-500"
											>
												<div class="flex items-center gap-2">
													<Fa icon={faFile} color={mode === 'light' ? '#f97316' : 'white'} />
													<span>{file.slice(file.search('main') + 5)}</span>
												</div>
											</div>
										</Link>
									{:else}
										<div class="flex justify-center items-center px-4 py-2 border -mt-0.5">
											There is no files.
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				{:else}
					<div class="flex justify-between flex-col gap-5 w-3/4">
						<!-- actions -->
						<div class="flex justify-between">
							<Breadcrumbs url={data} />
							<div
								class="flex gap-2 justify-end items-center"
								use:clickOutside
								on:click_outside={() => (isDropDownShow = false)}
							>
								<Button
									colorScheme={mode === 'light' ? 'orange' : 'blue50'}
									variant="outline"
									size="sm"
									><Link
										href={createGoToFileUrl(data.name)}
										on:click={() => {
											(isProjectFindList = true), goToFile();
										}}>Go to file</Link
									></Button
								>
								<Button
									colorScheme={mode === 'light' ? 'orange' : 'blue50'}
									variant="outline"
									size="sm"
									rightIcon={faPlus}
									handleClick={() => (isDropDownShow = true)}>Add file</Button
								>

								<Dropdown visibility={isDropDownShow} direction="bottom">
									<div class="dark:bg-slate-700 flex flex-col">
										<Button
											colorScheme={mode === 'light' ? 'orange' : 'blue50'}
											variant="ghost"
											fullWidth>Create new file</Button
										>
										<hr />
										<Button
											colorScheme={mode === 'light' ? 'orange' : 'blue50'}
											variant="ghost"
											fullWidth>Upload files</Button
										>
									</div>
								</Dropdown>
								<Button
									colorScheme={mode === 'light' ? 'orange' : 'blue50'}
									size="sm"
									rightIcon={faChevronDown}>Code</Button
								>
							</div>
						</div>
						<!-- structure -->
						<div class="dark:bg-slate-700 dark:text-gray-100 flex border rounded flex-col w-full">
							<!-- head -->
							<div
								class="dark:bg-slate-800 relative w-full p-4 -mb-0.5 border bg-gray-100 border-gray-200 rounded-tl rounded-tr"
							>
								<div class="flex justify-between items-center">
									<div class="flex items-center gap-2">
										<Avatar
											name={user && user.username}
											variant="bauhaus"
											colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
											size={24}
										/>
										<span
											class="dark:text-gray-100 text-gray-800 font-medium hover:underline cursor-pointer"
											>{user && user.username}</span
										>
										<!-- last commit -->
										<span
											class="dark:text-gray-500 text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
											>{lastCommit ? lastCommit.name : 'No commit'}</span
										>
									</div>

									<!-- amount of commits -->
									<div class="group flex gap-1 items-center cursor-pointer hover:text-blue-500">
										<Fa icon={faHistory} />
										<div class="text-sm">
											<span class="font-medium">{totalCommit}</span>
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
							{:else if !isFile}
								{#each lists as list}
									<Link href={createUrl(window.location.href, list)}>
										<div
											class="dark:text-gray-100 flex justify-between items-center px-4 py-2 border-t -mt-0.5"
										>
											<div class="flex items-center gap-2">
												<Fa
													icon={list.type === ListType.FOLDER ? faFolder : faFile}
													color={mode === 'light'
														? list.type === ListType.FOLDER
															? '#14b8a6'
															: '#f97316'
														: 'white'}
												/>

												<span>{list.name}</span>
											</div>

											<span class="text-sm"
												>{getFullFormatDateFromISOString(list.lastModifiedAt)}</span
											>
										</div>
									</Link>
								{:else}
									<div class="flex justify-center items-center px-4 py-2 border -mt-0.5">
										There is no data.
									</div>
								{/each}
							{:else if source}
								<main class="container">
									<div class="dark:!bg-slate-700 markdown-editor mt-3">
										<div class="right-panel">
											<div class="output">{markdown}</div>
										</div>
									</div>
								</main>
							{:else}
								<div class="flex justify-center items-center px-4 py-2 border -mt-0.5">
									There is no data.
								</div>
							{/if}
						</div>
					</div>
				{/if}
				<!-- library sidebar -->
				<div class="flex w-1/4" />
			</div>

			<!-- Issues section -->

			<!-- Settings section -->
		</div>
	</div>
</div>

<style scoped>
	.markdown-editor {
		padding: 0.5rem 1.5rem;
		background: hsl(0, 0%, 100%);
		max-width: 600px;
		min-height: 90vh;
		width: 90vw;
		line-height: 2.25;
		padding: 1rem;
	}
</style>
