<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
	import Link from 'svelte-link';
</script>

<div class="dark:bg-[#38b2ac] bg-orange-500 text-white">
	<div class="max-w-[1280px] py-20 px-8 mx-auto">
		<!-- <h1 class="max-w-[760px] mb-14 mx-auto text-center">
            <span class="text-5xl font-extrabold"><i>Flogram</i> is brand new and just launched!</span>

            <p class="mt-4">
                We're dedicated to improving the experience and performance of Flogram.
            </p>
        </h1> -->

		<div class="grid md:grid-cols-2 max-w-[880px] mx-auto gap-16">
			<div class="flex flex-col pl-8 border-l-2 border-teal-500 gap-5">
				<div class="text-8xl">0</div>

				<div class="flex items-center gap-2">
					<i class="fa fa-download" />

					Downloads per month
				</div>
			</div>

			<div class="flex flex-col pl-8 border-l-2 border-teal-500 gap-5">
				<div class="text-8xl">3</div>

				<div class="flex items-center gap-2">
					<i class="fa fa-github !text-xl" />

					Github stars
				</div>
			</div>

			<div class="flex flex-col pl-8 border-l-2 border-teal-500 gap-5">
				<div class="text-8xl">4</div>

				<div class="flex items-center gap-2">
					<i class="fa fa-users" />

					Core team members
				</div>
			</div>

			<div class="flex flex-col pl-8 border-l-2 border-teal-500 gap-5">
				<div class="text-8xl">21</div>

				<div class="flex items-center gap-2">
					<i class="fa fa-discord-alt !text-xl" />

					Discord members
				</div>
			</div>
		</div>

		<div class="mt-10 text-center">
			<p class="flex justify-center items-center mb-12 uppercase text-lg gap-2">
				Flogram Wizards <Fa icon={faHatWizard} />
			</p>

			<div class="grid grid-cols-6 max-w-[660px] mx-auto">
				<div class="flex items-center justify-center">
					<Link href="https://github.com/FlogramMatt">
						<div class="w-20 h-20 rounded-full overflow-hidden">
							<img src="https://avatars.githubusercontent.com/u/1498338?s=80?v=4" alt="Matt" />
						</div>
					</Link>
				</div>

				<div class="flex items-center justify-center">
					<Link href="https://github.com/fredericomba">
						<div class="w-20 h-20 rounded-full overflow-hidden">
							<img src="https://avatars.githubusercontent.com/u/11416855?s=80?v=4" alt="Matt" />
						</div>
					</Link>
				</div>

				<div class="flex items-center justify-center">
					<Link href="https://github.com/hardcommitoneself">
						<div class="w-20 h-20 rounded-full overflow-hidden">
							<img src="https://avatars.githubusercontent.com/u/104041595?s=80&v=4" alt="David" />
						</div>
					</Link>
				</div>

				<div class="flex items-center justify-center">
					<Link href="https://github.com/hardcommitoneself">
						<div class="w-20 h-20 rounded-full overflow-hidden">
							<img src="https://avatars.githubusercontent.com/u/51176044?s=80&v=4" alt="Didier" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	</div>
</div>
