<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L80Q2968RH"></script>
    <script>
        window.dataLayer = window.dataLayer || []
    
        function gtag() {
          dataLayer.push(arguments)
        }
    
        gtag('js', new Date())
        gtag('config', 'MEASUREMENT_ID')
    </script>
</svelte:head>

<script>
	import { onMount } from 'svelte';
    import { theme } from '$lib/store/theme';
    import { ToastContainer, FlatToast }  from "svelte-toasts";
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
    <ToastContainer let:data={data}>
		<FlatToast {data}  />
	</ToastContainer>
    <slot />
</div>