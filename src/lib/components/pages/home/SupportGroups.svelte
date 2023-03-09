<script lang="ts">
	const companies = [
		{
			name: 'Frink',
			logo: '/img/frink.jpg'
		},
		{
			name: 'Domino',
			logo: 'https://static.wixstatic.com/media/94e822_7535811236d24f50ae6312e714ff2fb5~mv2.png/v1/fill/w_199,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DOMI%202%202022.png'
		},
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
	];
</script>

<div class="dark:bg-gray-900 flex flex-col items-center text-center py-14 bg-gray-100">
	<span class="dark:text-[#38b2ac] text-xl text-orange-500 uppercase">Supported by</span>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-[800px] py-5">
		{#each companies as company}
			<div class="flex justify-center w-30 md:w-40 p-5 bg-white">
				<img src={company.logo} alt={company.name} class="w-15 h-10" />
			</div>
		{/each}
	</div>
</div>
