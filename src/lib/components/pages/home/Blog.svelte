<script lang="ts">
	import BlogCard from './components/BlogCard.svelte';
</script>

<div class="dark:bg-gray-900 py-32 mx-auto px-8">
	<h1 class="dark:text-gray-100 text-6xl mb-12 text-center font-extrabold text-gray-700">
		Why choose Flogram?
	</h1>

	<div class="grid md:grid-cols-3 gap-5">
		<BlogCard
			github_id={1498338}
			author="Matt"
			date="Sep 4, 2022"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			stars={5}
		/>
		<BlogCard
			github_id={11416855}
			author="Frederico"
			date="Aug 12, 2022"
			content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
			stars={4}
		/>
		<BlogCard
			github_id={51176044}
			author="Didier"
			date="Oct 1, 2022"
			content="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
			stars={4}
		/>
		<BlogCard
			github_id={104041595}
			author="David"
			date="Jan 20, 2017"
			content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
			stars={5}
		/>
	</div>
</div>
