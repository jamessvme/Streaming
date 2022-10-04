<script lang="ts">
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Badge from "$lib/components/core/Badge.svelte";
    import IconButton from '$lib/components/core/IconButton.svelte';
    import { faHome } from '@fortawesome/free-solid-svg-icons';
    import Link from 'svelte-link';
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">Badges</h1>

                <Link href="/components">
                    <IconButton icon={faHome} colorScheme='teal' variant='outline' />
                </Link>
            </div>
            <span>Badges are used to highlight an item's status for quick recognition..</span>
        </div>

        <section name="import">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Import</h1>

                <div class="relative prose prose-slate w-full">
                    <pre class="language-shell leading-3">
                        <code class="language-shell">
                            import Badge from '$lib/components/core/Badge.svelte'
                        </code>
                    </pre>
                </div>
            </div>
        </section>

        <section name="usage">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Usage</h1>

                <div class="relative prose prose-slate w-full">
                    <pre class="language-shell leading-3">
                        <code class="language-shell">
                            &lt;Badge size='md' colorScheme='orange'&gt;Badge&lt;/Badge&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </section>

        <section name="default">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Default</h1>

                <div class="flex items-center gap-2">
                    <Badge>default</Badge>
                </div>
            </div>
        </section>

        <section name="colors">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Badge Colors</h1>

                <div class="flex items-center gap-2">
                    <Badge>default</Badge>
                    <Badge colorScheme='green'>green</Badge>
                    <Badge colorScheme='orange'>orange</Badge>
                    <Badge colorScheme='red'>red</Badge>
                </div>
            </div>
        </section>

        <section name="variants">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Badge Variants</h1>

                <div class="flex items-center gap-2">
                    <Badge>default</Badge>
                    <Badge variant='outline' colorScheme='green'>Outline</Badge>
                    <Badge variant='solid' colorScheme='green'>Solid</Badge>
                    <Badge variant='subtle' colorScheme='green'>Subtle</Badge>
                </div>
            </div>
        </section>

        <section name="sizes">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Badge Sizes</h1>

                <div class="flex items-center gap-2">
                    <Badge>default</Badge>
                    <Badge variant='solid' colorScheme='green' fontSize='0.4rem'>Outline</Badge>
                    <Badge variant='solid' colorScheme='green' fontSize='0.6rem'>Solid</Badge>
                    <Badge variant='solid' colorScheme='green' fontSize='0.8rem'>Subtle</Badge>
                    <Badge variant='solid' colorScheme='green' fontSize='1rem'>Big</Badge>
                </div>
            </div>
        </section>
    </div>
</ComponentsLayout>

