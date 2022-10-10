<script lang="ts">
    import FeatureCard from "./components/FeatureCard.svelte";
    import { faThunderstorm, faLightbulb, faBacterium, faAward, faSpider, faExchange } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex flex-col items-center text-center py-15 bg-gray-100">
    <span class="max-w-[500px] text-4xl text-orange-500">
        Features of <b>Flogram</b>
    </span>

    <div class="py-10 grid md:grid-cols-3 gap-3">
        <FeatureCard icon={faThunderstorm} title="Faster" description="Allow peak performance, Minimize language, Minimize amount of code that needs to be written" />
        <FeatureCard icon={faLightbulb} title="Simpler" description="Minimize how much users need to think about/simplify, Improve conciseness, ok to shorten the most commonly used words" />
        <FeatureCard icon={faBacterium} title="Easier" description="Prevent bugs.  Ideally prevent and cause compiler error, or make it easier to spot" />
        <FeatureCard icon={faAward} title="Easy to LEARN" description="Similar to popular languages. English is a popular language. We have Python-like syntax!" />
        <FeatureCard icon={faSpider} title="Flexibility" description="Improve flexibility. We do not have void pointers! (They are unsafe and not needed in Flogram)" />
        <FeatureCard icon={faExchange} title="Performance" description="Speed up compilation time. We have 1-bit boolean variables! (Boolean in other languages usually takes 8-bits or more)" />
    </div>
</div>