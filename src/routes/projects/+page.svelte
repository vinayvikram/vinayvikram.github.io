<script>
	import Projects from '$lib/components/projects.svelte';
</script>

<div class="projects-container">
	<Projects />
</div>

<style>
	.projects-container {
		padding-top: 3rem;
	}

	@media only screen and (min-width: 1024px) {
		.projects-container {
			padding-top: 4rem;
		}
	}
</style>
