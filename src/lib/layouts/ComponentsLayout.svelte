<script>
    import ISun from "$lib/svg/ISun.svelte";
</script>

<div>
    <div class="container mx-auto p-5">
        <div class="flex justify-between items-center">
            <h1 class="text-lg">
                Core components for our app.
            </h1>

            <ISun />
        </div>
        <slot />
    </div>
</div>