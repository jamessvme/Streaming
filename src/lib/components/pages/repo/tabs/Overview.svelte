<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { current_user } from '$lib/store/user';
	import Button from '$lib/components/core/Button.svelte';
	import type { User } from '$lib/types/User';
	import axios from 'axios';
	import { env } from '$env/dynamic/public';
	import { theme } from '$lib/store/theme';

	let mode: string = 'dark';
	let source: string = `<h1 align="center"><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28">Senior Software Engineer</h1>
 <a href="https://github.com/GruDev325/GruDev325/"> </a>
<br/>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=1AF761&lines=Full-Stack+%7C%7C+Front-End+%7C%7C+Back-End+%7C%7C+Blockchain;React/Next+%7C%7C+Vue/Nuxt+%7C%7C+Typescript+%7C%7C+Web3+%7C%7C+Node+%7C%7C+PHP/Python;Learning+New+Things+Everyday;Never+Stop+Learning!&center=true&width=800&height=45" alt="meticulousfan">
</p>
<hr/>

<img align="right" alt="GIF" src="https://github.com/GruDev325/GruDev325/blob/main/image/grudev325.gif" width="450" height="270" />

![](https://img.shields.io/badge/Network-BitCoin-informational?style=flat&logo=bitcoin&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Network-Ethereum-informational?style=flat&logo=ethereum&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-Solidity-informational?style=flat&logo=solidity&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Token-ERC721-informational?style=flat&logo=erc721&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Token-ERC1155-informational?style=flat&logo=erc1155&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Token-ERC20-informational?style=flat&logo=erc20&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-React-informational?style=flat&logo=react&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-Vue-informational?style=flat&logo=vue.js&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-Angular-informational?style=flat&logo=angular&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-Ruby_On_Rails-informational?style=flat&logo=ruby&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-Laravel-informational?style=flat&logo=laravel&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Framework-Electron-informational?style=flat&logo=electron&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-PHP-informational?style=flat&logo=php&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-Python-informational?style=flat&logo=python&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Language-Go-informational?style=flat&logo=go&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/CI/CD-Github_Action-informational?style=flat&logo=github&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/CI/CD-Circle_CI-informational?style=flat&logo=circleci&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Database-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Database-MySQL-informational?style=flat&logo=mysql&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Database-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Database-Sqlite-informational?style=flat&logo=sqlite&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Cloud-Digital_Ocean-informational?style=flat&logo=digitalocean&logoColor=white&color=3bac3a)
![](https://img.shields.io/badge/Cloud-AWS-informational?style=flat&logo=Amazon&logoColor=white&color=3bac3a)

## 🔥 Streak Stats

<p align="center">
	<img align="center" src="https://github-readme-streak-stats.herokuapp.com?user=meticulousfan&theme=tokyonight_duo&hide_border=true" alt="meticulousfan" />
  <p align="center"> Stay hungry, Stay foolish 🔥 </p>
</p>

## ⚡ Recent GitHub Activity
<br/>
 <img alt="user's activity graph" src="https://activity-graph.herokuapp.com/graph?username=meticulousfan&custom_title=meticulousfan's%20Contribution%20Graph&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=false" />
<br/>

## 📊 Github Stats

<img align="left" alt="meticulousfan's Github Stats" src="https://github-readme-stats.vercel.app/api?username=meticulousfan&show_icons=true&include_all_commits=true&count_private=true&icon_color=fff&text_color=fff&bg_color=DEG,000,000,001,002,003" height="170px"/>
<img align="right" alt="meticulousfan's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=meticulousfan&layout=compact&langs_count=8&theme=dark&hide_border=false&title_color=F85D7F&icon_color=F8D866" height="170px"/>
`;
	let user: User;
	let markdown = marked(source);
	let isEditable = false;
	const handleEditable = () => {
		isEditable = !isEditable;
	};
	current_user.subscribe((value) => (user = value));

	const uploadProfileMd = async (data: string) => {
		try {
			const response = await axios.put(`${env.PUBLIC_FLOGRAM_API_URL}/users/profilemd/update`, {
				profile: data
			});
		} catch (err) {
			console.log(err);
		}
		return;
	};
	$: {
		source;
		markdown = marked(source);
		uploadProfileMd(source);
	}

	onMount(async () => {
		try {
			theme.subscribe((value) => (mode = value));
			const response = await axios.get(`${env.PUBLIC_FLOGRAM_API_URL}/users/profilemd`);

			if (response.data) {
				source = response.data;
			}
		} catch (error) {
			console.log(error);
		}
	});
</script>

<main class="container mx-auto">
	<div class="flex justify-between">
		<span class="dark:text-gray-100">{user.username} / profile.md</span>
		<Button handleClick={handleEditable} colorScheme={mode === 'light' ? 'orange' : 'blue50'}
			><i class="fa fa-edit" /></Button
		>
	</div>
	<div class="markdown-editor mt-3">
		{#if isEditable}
			<div class="left-panel">
				<textarea bind:value={source} class="source" />
			</div>
		{:else}
			<div class="right-panel">
				<div class="output">{@html markdown}</div>
			</div>
		{/if}
	</div>
</main>

<style>
	.container {
		width: 80%;
		border: rgb(157, 166, 173) 1px solid;
		border-radius: 5px;
		padding: 10px 30px;
	}
	.markdown-editor {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-evenly;
	}
	.left-panel,
	.right-panel {
		width: 100%;
		height: 80vh;
		background: #ffffff;
	}
	.right-panel {
		overflow: auto;
	}
	.source {
		border: none;
		width: 100%;
		height: 100%;
		color: #83ba52;
	}
	.source:focus {
		outline: none;
	}
	.output {
		width: 100%;
		padding: 0 2em;
	}
</style>
