<script lang="ts">
	import FeatureCard from './components/FeatureCard.svelte';
	import { faIndustry, faThunderstorm, faCropSimple } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="dark:bg-gray-900 flex flex-col items-center text-center py-15 bg-gray-100">
	<span class="dark:text-gray-100 text-4xl text-orange-500">
		Features of the <b>Flogram Programming Language</b>
	</span>

	<div class="py-10 grid md:grid-cols-3 gap-3">
		<FeatureCard
			icon={faIndustry}
			title="High Productivity"
			description="Designed to keep you in the flow while programming, minimizing things that slow you down. Minimal language reduces how much you need to remember while reading like English."
		/>
		<FeatureCard
			icon={faThunderstorm}
			title="High Performance"
			description="While Flogram always defaults to safe behavior, all safety features can be removed using !. Initial tests show Flogram to be 2x as fast than C  (plugin real number later)"
		/>
		<FeatureCard
			icon={faCropSimple}
			title="Low Energy Usage"
			description="Improve the battery life of your users. Reduce your carbon footprint and help save the planet."
		/>
		<!-- <FeatureCard icon={faAward} title="Easy to LEARN" description="Similar to popular languages. English is a popular language. We have Python-like syntax!" />
        <FeatureCard icon={faSpider} title="Flexibility" description="Improve flexibility. We do not have void pointers! (They are unsafe and not needed in Flogram)" />
        <FeatureCard icon={faExchange} title="Performance" description="Speed up compilation time. We have 1-bit boolean variables! (Boolean in other languages usually takes 8-bits or more)" /> -->
	</div>
</div>
