<script>
    import Button from "$lib/components/core/Button.svelte";
    import ISun from "$lib/svg/ISun.svelte";
</script>

<div>
    <div class="container mx-auto p-5">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl">
                Core components for our app.
            </h1>

            <Button colorScheme="transparent">
                <ISun />
            </Button>
        </div>
        <slot />
    </div>
</div>