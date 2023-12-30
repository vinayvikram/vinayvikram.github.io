<script>
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="scroll-container">
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
		overflow-y: auto;
	}

	main {
		background: linear-gradient(#f5f4f2, #a1acce);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
