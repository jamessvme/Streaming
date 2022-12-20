<script type="ts">
	import Button from '$lib/components/core/Button.svelte';
	import { onMount } from 'svelte';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
	import { theme } from '$lib/store/theme';

	let mode = 'dark';
	let particlesConfig = {
		fpsLimit: 100,
		particles: {
			color: {
				value: '#0000'
			},
			links: {
				enable: true,
				color: '#0000'
			},
			move: {
				enable: true
			}
		},
		interactivity: {
			events: {
				onhover: {
					enable: true,
					mode: 'repulse'
				},
				onClick: {
					enable: true,
					mode: 'push'
				}
			}
		},
		fullScreen: false
	};

	let particlesInit = async (engine: any) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};
	onMount(() => {
		theme.subscribe((value) => (mode = value));
	});
</script>

<div class="relative flex items-center justify-center w-full h-[800px] md:h-[600px]">
	<!-- banner content -->
	<div
		class="dark:bg-slate-700 dark:text-gray-100 dark:opacity-80 flex flex-col gap-2 text-center p-5 bg-white/90 rounded-xl"
	>
		<div class="text-6xl font-extrabold text-orange-500">
			<h1 class="dark:text-gray-100">Performance without Pain</h1>
			<p class="dark:text-gray-100 text-3xl italic">
				"A High Performance, Energy Efficient, Easy Programming Language"
			</p>
		</div>

		<p class="dark:text-[#4fd1c5] text-gray-500">
			Flogram is simpler and faster but similar to the other popular programming languages like C,
			C++, Rust.
		</p>

		<div class="flex flex-col md:flex-row items-center justify-center mt-5 gap-5">
			<Button
				size="lg"
				colorScheme={mode === 'light' ? 'orange' : 'blue50'}
				rightIcon={faArrowRight}>View Tutorial</Button
			>
			<Button
				size="lg"
				colorScheme={mode === 'dark' ? 'hvGray' : 'orange'}
				variant="ghost"
				rightIcon={faDownload}>Download (0 weekly downloads)</Button
			>
		</div>
	</div>
	<Particles options={particlesConfig} {particlesInit} />
</div>

<style>
	:global(#tsparticles) {
		margin: 0;
		padding: 0;
		position: absolute;
		width: 100%;
		height: 800px;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	@media screen and (min-width: 768px) {
		:global(#tsparticles) {
			height: 600px;
		}
	}
</style>
