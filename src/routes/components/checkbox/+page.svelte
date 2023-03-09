<script type="ts">
    import ComponentsLayout from "$lib/layouts/ComponentsLayout.svelte";
    import Checkbox from "$lib/components/core/Checkbox.svelte";
    import Link from 'svelte-link';
    import Button from "$lib/components/core/Button.svelte";
    import IconButton from "$lib/components/core/IconButton.svelte";
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faHome } from '@fortawesome/free-solid-svg-icons';

    let checkV = false;
    let checkV_isDisabled = false;
    let check_Blue = false;
    let check_Red = false;
    let check_Orange = false;
</script>

<ComponentsLayout>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex justify-between">
                <h1 class="text-4xl font-bold">CheckBox</h1>

                <Link href="/components">
                    <IconButton icon={faHome} colorScheme='teal' variant='outline' />
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
                            &lt;Checkbox bind:value=&#123;checkV&#125; &gt;Click Me!&lt;/Button&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </section>

        <section name="default">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Default</h1>

                <div class="flex items-center gap-2">
                    <Checkbox bind:value={checkV}>Click Me!</Checkbox>
                </div>
            </div>
        </section>

        <section name="default">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Disabled</h1>

                <div class="flex items-center gap-2">
                    <Checkbox bind:value={checkV_isDisabled} isDisabled>Click Me! - Disabled</Checkbox>
                    <Checkbox bind:value={checkV_isDisabled} isDisabled defaultChecked>Click Me! - Disabled & DefaultChecked</Checkbox>
                </div>
            </div>
        </section>

        <section name="default">
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl">Colors</h1>

                <div class="flex items-center gap-2">
                    <Checkbox bind:value={check_Blue} >Click Me! - Defaul(Blue)</Checkbox>
                    <Checkbox bind:value={check_Red} colorScheme='red'>Click Me! - Red</Checkbox>
                    <Checkbox bind:value={check_Orange} colorScheme='orange'>Click Me! - Orange</Checkbox>
                </div>
            </div>
        </section>
    </div>
</ComponentsLayout>

