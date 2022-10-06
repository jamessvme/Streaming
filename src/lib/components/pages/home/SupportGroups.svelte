<script lang="ts">
    const companies = [
        {
            name: 'Apple',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/Apple-Logo-600x400.png.webp'
        },
        {
            name: 'Microsoft',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/Microsoft-Logo-600x400.png.webp'
        },
        {
            name: 'IBM',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/IBM-Logo-600x400.png.webp'
        },
        {
            name: 'Amazon',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/Amazon-Logo-600x400.png.webp'
        },
        {
            name: 'Coca Cola',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/Coca-Cola-Logo-600x400.png.webp'
        },
        {
            name: 'Intel',
            logo: 'https://justcreative.com/wp-content/uploads/2022/01/Intel-600x400.png.webp'
        }
    ]
</script>

<div class="flex flex-col items-center text-center py-14 bg-gray-100">
    <span class="text-xl text-orange-500 uppercase">Supported & Backed Groups</span>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-[800px] py-5">
        {#each companies as company}
        <div class="flex justify-center w-40 p-5 bg-white">
            <img src={company.logo} alt={company.name} class="w-15 h-10" />
        </div>
        {/each}
    </div>
</div>