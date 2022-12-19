<script>
	import ComponentsLayout from '$lib/layouts/ComponentsLayout.svelte';
	import Card from '$lib/components/pages/components/Card.svelte';
	import Link from 'svelte-link';
</script>

<ComponentsLayout>
	<div class="p-5">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-3">
			<Link href="/components/button">
				<Card title="Button" content="Button guide" />
			</Link>

			<Link href="/components/checkbox">
				<Card title="Checkbox" content="Checkbox guide" />
			</Link>

			<Link href="/components/iconbutton">
				<Card title="IconButton" content="IconButton guide" />
			</Link>

			<Link href="/components/input">
				<Card title="Input" content="Input guide" />
			</Link>

			<Link href="/components/badge">
				<Card title="Badge" content="Badge guide" />
			</Link>
		</div>
	</div>
</ComponentsLayout>
