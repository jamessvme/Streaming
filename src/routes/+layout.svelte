<script>
	import { onMount } from 'svelte';
    import { theme } from './store/theme';
    import '../global.css';

    onMount(() => {
        theme.subscribe(value => {
            if(value === 'light') {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add(value);
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add(value);
            }
        })
    })
</script>

<div>
    <slot />
</div>