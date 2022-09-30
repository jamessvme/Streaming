<script>
    import { faMailBulk, faArrowRight } from '@fortawesome/free-solid-svg-icons';
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Button from "$lib/components/core/Button.svelte";
    import IconButton from '$lib/components/core/IconButton.svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faHome } from '@fortawesome/free-solid-svg-icons';
    import Link from 'svelte-link';
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">Buttons</h1>

                <Link href="/components">
                    <IconButton icon={faHome} colorScheme='teal' variant='outline' />
                </Link>
            </div>
            <span>Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.</span>
        </div>

        <section name="import">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Import</h1>

                <div class="relative prose prose-slate w-full">
                    <pre class="language-shell leading-3">
                        <code class="language-shell">
                            import Button from '$lib/components/core/Button.svelte'
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
                            &lt;Button size='md' variant='outline' colorScheme='orange'&gt;Orange&lt;/Button&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </section>

        <section name="colors">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Button Sizes</h1>

                <div class="flex items-center gap-2">
                    <Button colorScheme='teal' size="xs">Button - xs</Button>
                    <Button colorScheme='teal' size="sm">Button - sm</Button>
                    <Button colorScheme='teal'>Button - md</Button>
                    <Button colorScheme='teal' size="lg">Button - lg</Button>
                </div>
            </div>
        </section>

        <section name="variants">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Button Variants</h1>

                <div class="flex items-center gap-2">
                    <Button colorScheme='teal'>Button - solid</Button>
                    <Button colorScheme='teal' variant="outline">Button - outline</Button>
                    <Button colorScheme='teal' variant="ghost">Button - ghost</Button>
                    <Button colorScheme='teal' variant="link">Button - link</Button>

                </div>
            </div>
        </section>

        <section name="colors">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Button Colors</h1>

                <div class="grid grid-cols-10 gap-1">
                    <Button>Default</Button>
                    <Button colorScheme='red'>Red</Button>
                    <Button colorScheme='orange'>Orange</Button>
                    <Button colorScheme='yellow'>Yellow</Button>
                    <Button colorScheme='green'>Green</Button>
                    <Button colorScheme='teal'>Teal</Button>
                    <Button colorScheme='blue'>Blue</Button>
                    <Button colorScheme='cyan'>Cyan</Button>
                    <Button colorScheme='purple'>Purple</Button>
                    <Button colorScheme='pink'>Pink</Button>
                </div>
            </div>
        </section>

        <section name="button-with-icons">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Button with Icons</h1>

                <div class="flex items-center gap-2">
                    <Button colorScheme='teal' leftIcon={faMailBulk}>Button - leftIcon</Button>
                    <Button colorScheme='teal' variant='outline' rightIcon={faArrowRight}>Button - rightIcon</Button>
                </div>
            </div>
        </section>

        <section name="button-is-loading">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Button loading state</h1>

                <div class="flex items-center gap-2">
                    <Button colorScheme='teal' leftIcon={faMailBulk} isLoading>Button - loading without text</Button>
                    <Button colorScheme='teal' variant='outline' leftIcon={faMailBulk} loadingText='loading...' isLoading>Button - loading with text</Button>
                </div>
            </div>
        </section>

    </div>
</ComponentsLayout>