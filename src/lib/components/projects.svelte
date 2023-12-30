<script>
	import SectionLabel from './section-label.svelte';
</script>

<SectionLabel label="Projects" />
<section class="projects">
	<div>
		Working on some interesting projects.
		<br />
		Do check again.
	</div>
</section>

<style>
	.projects {
		padding: 3rem;
	}

	.projects > div {
		font-size: 1.5rem;
		font-style: italic;
	}

	@media only screen and (min-width: 1024px) {
		.projects {
			padding: 4rem 6rem;
		}
	}
</style>
