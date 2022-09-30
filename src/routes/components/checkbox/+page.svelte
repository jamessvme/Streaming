<script type="ts">
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Checkbox from "$lib/components/core/Checkbox.svelte";
    import Link from 'svelte-link';
    import Button from "$lib/components/core/Button.svelte";
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faHome } from '@fortawesome/free-solid-svg-icons';

    let checkV = false;
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">CheckBox</h1>

                <Link href="/components">
                    <Button colorScheme='teal' variant='outline'>
                        <Fa icon={faHome} primaryColor='lightseagreen' />
                    </Button>
                </Link>
            </div>
            <span>Checkbox component is used in forms when a user needs to select multiple values from several options.</span>
        </div>

        <section name="import">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Import</h1>

                <div class="relative prose prose-slate w-full">
                    <pre class="language-shell leading-3">
                        <code class="language-shell">
                            import Checkbox from "$lib/components/core/Checkbox.svelte";
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

        <section name="default">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Default</h1>

                <div class="flex items-center gap-2">
                    <Checkbox bind:value={checkV}>CheckBox</Checkbox>
                </div>
            </div>
        </section>
    </div>
</ComponentsLayout>

