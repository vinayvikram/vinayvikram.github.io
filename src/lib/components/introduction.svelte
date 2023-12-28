<script>
	import CustomButton from './custom-button.svelte';
</script>

<section class="intro">
	<p>Hi there !</p>
	<br />
	<p>
		<span>
			I am a front-end developer with <br /> more than 2 years of experience.
		</span>
		<br />
		<span>
			I use React JS for building <br /> beautiful UI components.
		</span>
	</p>
	<br />
	<CustomButton buttonText="Check projects" />
</section>

<style>
	.intro {
		min-height: 100%;
		padding: 3rem;
	}
	.intro:first-child {
		font-size: 2.5rem;
	}
	p {
		all: unset;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 2rem;
	}

	@media only screen and (min-width: 1024px) {
		.intro {
			padding: 4rem 6rem;
		}
	}
</style>
