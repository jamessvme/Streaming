<script lang="ts">
	import Link from 'svelte-link';
</script>

<footer class="dark:bg-gray-900 flex gap-2 items-center text-center flex-col text-gray-700 py-12">
	<p>Copyright @2022 Launched by Flogram team</p>

	<!-- social button groups -->
	<div class="hidden md:flex items-center px-8 gap-5">
		<Link
			href="https://github.com/Flogram"
			target="_blank"
			class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition"
		>
			<i class="fa fa-github leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
		</Link>

		<Link
			href="https://discord.gg/rYzWK6497a"
			target="_blank"
			class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition"
		>
			<i class="fa fa-discord-alt leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
		</Link>

		<Link
			href=""
			target="_blank"
			class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition"
		>
			<i class="fa fa-youtube-play leading-4 shrink-0 transition hover:text-gray-600 !text-2xl" />
		</Link>

		<Link
			href="https://www.facebook.com/Flogram.dev"
			target="_blank"
			class="bg-transparent cursor-pointer outline outline-transparent outline-offset-2 text-inherit transition"
		>
			<i
				class="fa fa-facebook-square leading-4 shrink-0 transition hover:text-gray-600 !text-2xl"
			/>
		</Link>
	</div>
</footer>
