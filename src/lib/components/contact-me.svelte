<script>
	import SectionLabel from './section-label.svelte';
</script>

<SectionLabel label="Contact me" />
<section class="contact-me">
	<div>Feel free to drop any message.</div>
</section>

<style>
	.contact-me {
		padding: 3rem;
	}

	.contact-me > div {
		font-size: 1.5rem;
		font-style: italic;
	}

	@media only screen and (min-width: 1024px) {
		.contact-me {
			padding: 4rem 6rem;
		}
	}
</style>
