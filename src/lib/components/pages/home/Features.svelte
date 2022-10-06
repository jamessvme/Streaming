<script lang="ts">
    import FeatureCard from "./components/FeatureCard.svelte";
    import { faThunderstorm, faLightbulb, faBacterium, faAward, faSpider, faExchange } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex flex-col items-center text-center py-15 bg-gray-100">
    <span class="max-w-[500px] text-4xl text-orange-500">
        Key Features of <b>Flogram</b>
    </span>

    <div class="py-10 grid md:grid-cols-3 gap-3">
        <FeatureCard icon={faThunderstorm} title="Faster" description="Flogram is faster than the other languages." />
        <FeatureCard icon={faLightbulb} title="Simpler" description="Flogram is simpler than the other languages." />
        <FeatureCard icon={faBacterium} title="Easier" description="Flogram is easier than the other languages." />
        <FeatureCard icon={faAward} title="Test1" description="Flogram is test1 than the other languages." />
        <FeatureCard icon={faSpider} title="Test2" description="Flogram is test2 than the other languages." />
        <FeatureCard icon={faExchange} title="Test3" description="Flogram is test3 than the other languages." />
    </div>
</div>