<script type="ts">
    import Button from "$lib/components/core/Button.svelte";
    import Particles from "svelte-particles";
    import { loadFull } from "tsparticles";
    import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

    let particlesConfig = {
        fpsLimit: 100,
        particles: {
            color: {
                value: "#000"
            },
            links: {
                enable: true,
                color: "#000"
            },
            move: {
                enable: true
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
        },
        fullScreen: false
    };

    let particlesInit = async (engine: any) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
</script>

<style>
    :global(#tsparticles) {
        margin: 0;
        padding: 0;
        position: fixed;
        width: 100%;
        height: 800px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    @media screen and (min-width: 680px) {
        :global(#tsparticles) {
            height: 600px;
        }    
    }
</style>

<div class="relative flex items-center justify-center w-full h-[800px] md:h-[600px]">
    <!-- banner content -->
    <div class="flex flex-col gap-2 text-center p-5 bg-white/90 rounded-xl">
        <div class="text-6xl font-extrabold text-orange-500">
            <h1>C -> Rust -> Flogram</h1>
            <p class="text-3xl italic">"Diet Language, Free of Syntactic Sugar"</p>
        </div>

        <p class="text-gray-500">Flogram is simpler and faster but familiar with the other popular programming languages like C, C++, Rust.</p>

        <div class="flex flex-col md:flex-row items-center justify-center mt-5 gap-5">
            <Button size='lg' colorScheme='orange' rightIcon={faArrowRight}>Get Started</Button>
            <Button size='lg' colorScheme='orange' variant='ghost' rightIcon={faDownload}>Download(9837 weekly downloads)</Button>
        </div>
    </div>
    <Particles options={particlesConfig} particlesInit={particlesInit} />
</div>