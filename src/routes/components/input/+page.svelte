<script>
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Link from 'svelte-link';
    import { faSearch, faHome, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
    import IconButton from "$lib/components/core/IconButton.svelte";

    import Input from "$lib/components/core/Input.svelte";
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">Input</h1>

                <Link href="/components">
                    <Link href="/components">
                        <IconButton icon={faHome} colorScheme='teal' variant='outline' />
                    </Link>
                </Link>
            </div>
            <span>Input component is a component that is used to get user input in a text field.</span>
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
                            &lt;IconButton variant='outline' colorScheme='orange'&gt;Orange&lt;/IconButton&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </section>

        <section name="deafult">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Default</h1>
    
                <div class="flex items-center gap-2">
                    <Input placeholder='Please enter anything...'/>
                </div>
            </div>
        </section>

        <section name="sizes">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Sizes</h1>
    
                <div class="flex flex-col items-center gap-2">
                    <Input placeholder='Please enter anything...' size='xs' />
                    <Input placeholder='Please enter anything...' size='sm' />
                    <Input placeholder='Please enter anything...' size='md' />
                    <Input placeholder='Please enter anything...' size='lg' />
                </div>
            </div>
        </section>
    </div>
</ComponentsLayout>