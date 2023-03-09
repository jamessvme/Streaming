<script type="ts">
    export let title = '';
    export let content = '';
</script>

<div class="flex flex-col border rounded-lg gap-1 p-6 cursor-pointer hover:border-sky-500 hover:bg-gradient-to-t hover:from-cyan-50 hover:to-sky-100 transition">
    <div class="text-2xl">{title}</div>
    <div class="">
        {content}
    </div>
</div>