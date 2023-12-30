<script>
	import AboutMe from '$lib/components/about-me.svelte';
	import Skills from '$lib/components/skills.svelte';
</script>

<div class="about-me-container">
	<AboutMe />
	<Skills />
</div>

<style>
	.about-me-container {
		padding-top: 3rem;
	}

	@media only screen and (min-width: 1024px) {
		.about-me-container {
			padding-top: 4rem;
		}
	}
</style>
