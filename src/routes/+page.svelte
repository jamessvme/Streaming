<script type="ts">
    import HomeLayout from "$lib/layouts/HomeLayout.svelte";
    import Banner from "$lib/components/pages/home/Banner.svelte";
    import SupportGroups from "$lib/components/pages/home/SupportGroups.svelte";
    import Features from "$lib/components/pages/home/Features.svelte";
</script>

<HomeLayout>
    <Banner />
    <SupportGroups />
    <Features />
</HomeLayout>