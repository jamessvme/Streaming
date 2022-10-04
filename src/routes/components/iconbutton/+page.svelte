<script type="ts">
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Link from 'svelte-link';
    import { faSearch, faHome, faUser, faGear } from '@fortawesome/free-solid-svg-icons';

    import IconButton from "$lib/components/core/IconButton.svelte";
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">IconButton</h1>

                <Link href="/components">
                    <Link href="/components">
                        <IconButton icon={faHome} colorScheme='teal' variant='outline' />
                    </Link>
                </Link>
            </div>
            <span>Icon button renders an icon within in a button.</span>
        </div>

        <section name="import">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Import</h1>
    
                <div class="relative prose prose-slate w-full">
                    <pre class="language-shell leading-3">
                        <code class="language-shell">
                            import IconButton from '$lib/components/core/IconButton.svelte'
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
                            &lt;IconButton icon=&#123;faHome&#125; variant='outline' colorScheme='orange'&gt;&lt;/IconButton&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    
        <section name="colors">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Colors</h1>
    
                <div class="flex items-center gap-2">
                    <IconButton icon={faHome} />
                    <IconButton icon={faSearch} colorScheme='blue' />
                    <IconButton icon={faGear} colorScheme='teal' />
                    <IconButton icon={faUser} colorScheme='orange' />
                </div>
            </div>
        </section>
    
        <section name="colors">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Variants</h1>
    
                <div class="flex items-center gap-2">
                    <IconButton icon={faHome} colorScheme='teal' />
                    <IconButton icon={faSearch} colorScheme='teal' variant='outline' />
                    <IconButton icon={faGear} colorScheme='teal' variant='ghost' />
                    <IconButton icon={faUser} colorScheme='teal' variant='link' />
                </div>
            </div>
        </section>
    </div>
</ComponentsLayout>