<script lang="ts">
    export let size = 'md';
    export let src = '';
    export let alt = '';

    const sizes = {
        'xs': 'w-6 h-6',
        'sm': 'w-8 h-8',
        'md': 'w-10 h-10',
        'lg': 'w-12 h-12'
    }

    type SizeType = typeof sizes;

    const sizeF = sizes[size as keyof SizeType];
</script>

<div class={`${sizeF} rounded-full overflow-hidden`}>
    <img src={src} alt={alt} />
</div>