<script type="ts">
    export let maxW: string = '';
    export let bgColor: string = '';
    export let textColor: string = '';
</script>

<div class={`container mx-auto ${maxW} ${bgColor} ${textColor}`}>
    <slot />
</div>