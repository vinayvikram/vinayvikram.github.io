<script>
	import ContactMe from '$lib/components/contact-me.svelte';
</script>

<div class="contact-me-container">
	<ContactMe />
</div>

<style>
	.contact-me-container {
		padding-top: 3rem;
	}

	@media only screen and (min-width: 1024px) {
		.contact-me-container {
			padding-top: 4rem;
		}
	}
</style>
