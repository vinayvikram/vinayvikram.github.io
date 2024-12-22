<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { navigating } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import '../app.css';

	let scrollContainer: HTMLDivElement;

	let theme: 'LIGHT' | 'DARK' = 'LIGHT';

	const toggleTheme = () => {
		if (theme === 'LIGHT') {
			theme = 'DARK';
		} else {
			theme = 'LIGHT';
		}
	};

	onMount(() => {
		if (browser && window.matchMedia('(prefers-color-scheme:dark)').matches) {
			theme = 'DARK';
		} else {
			theme = 'LIGHT';
		}
	});

	// scroll to top on navaigation
	$: if ($navigating && scrollContainer) {
		scrollContainer.scrollTo(0, 0);
	}
</script>

<div class={`scroll-container ${theme.toLocaleLowerCase()}`} bind:this={scrollContainer}>
	<Header {theme} {toggleTheme} />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.scroll-container {
		width: 100%;
		padding-top: 5rem;
		height: calc(100% - 5rem);
		overflow-x: hidden;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		color: var(--text-color);
	}

	main {
		flex: 1;
		background: linear-gradient(var(--bg-gradient-start-color), var(--bg-gradient-end-color));
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
