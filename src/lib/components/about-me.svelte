<script>
	import SectionLabel from '$lib/components/section-label.svelte';
</script>

<SectionLabel label="About me" />
<section class="about-me">
	<p>
		I am a self-taught programmer. I am passionate about web development. I am currenlty working as
		frontend developer in a service based company.
	</p>
	<p>
		With more than 1 year of experience, I have had the opportunity to work on various interesting
		features, which helped me to develop a strong skill set in React JS.
	</p>
	<p>
		I am constantly seeking to expand my knowledge and stay up-to-date with latest technology. I am
		learning Node JS and looking forward to understand backend devlopement.
	</p>
	<p>
		I am eager to contribute to software engineering using my skills and expertise, as I believe in
		the power of softwares to make a positive impact.
	</p>
	<p>
		If you have any questions or would like to connect, please feel free to reach out to me. I am
		always open to new opportunities and collaborations.
	</p>
</section>

<style>
	.about-me {
		padding: 3rem;
	}

	@media only screen and (min-width: 1024px) {
		.about-me {
			padding: 4rem 6rem;
		}
	}
</style>
