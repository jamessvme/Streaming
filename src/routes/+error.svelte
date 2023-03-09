<script>
	import { page } from '$app/stores';
	import Link from 'svelte-link';
	const {
		status,
		error: { message }
	} = $page;
	const title = `${status}: ${message}`;
</script>

<!-- <svelte:head>
	<title>{title}</title>
</svelte:head> -->
<main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">{status}</h1>
	<div class="bg-slate-600 px-2 text-gray-100 text-sm rounded rotate-12 absolute">{message}</div>
	<button class="mt-5">
		<Link
			href="/app/repo"
			class="relative inline-block text-sm font-medium text-gray-100 group active:text-orange-500 focus:outline-none focus:ring"
		>
			<span
				class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-200 group-hover:translate-y-0 group-hover:translate-x-0"
			/>

			<span class="relative block px-8 py-3 bg-[#1A2238] border border-current"> Go Home </span>
		</Link>
	</button>
</main>
