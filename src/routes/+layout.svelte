<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { navigating } from '$app/stores';

	let scrollContainer: HTMLDivElement;

	// scroll to top on navaigation
	$: if ($navigating && scrollContainer) {
		scrollContainer.scrollTo(0, 0);
	}
</script>

<div class="scroll-container" bind:this={scrollContainer}>
	<Header />
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
	}

	main {
		background: linear-gradient(#f5f4f2, #a1acce);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
