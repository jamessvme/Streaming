<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
</svelte:head>

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