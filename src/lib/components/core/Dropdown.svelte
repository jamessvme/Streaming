<script lang="ts">
    export let visibility = false;
    export let direction = "left";
</script>

<div class={`${visibility ? "opacity-100 z-10" : "opacity-0 -z-10"} absolute m-0 transition mt-2 ${direction === "left" ? "left-0" : "!right-0" }`}>
    <div class="bg-white shadow-sm text-inherit w-3xl p-2 rounded-md border-[1px]">
        <slot />
    </div>
</div>