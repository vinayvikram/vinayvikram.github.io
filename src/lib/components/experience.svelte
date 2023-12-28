<script>
	import CustomButton from './custom-button.svelte';
	import SectionLabel from './section-label.svelte';
</script>

<SectionLabel label="Experience" />
<section class="experience">
	<h3 class="position">Frontend Developer</h3>
	<div>
		<b>KAOS | Bangalore | Full-Time</b>
		<i>Apr 2022 - present | 1 year 6 months</i>
		<ul>
			<li>
				Worked on frontend for a Cloud-based application used for tv program scheduling with
				customers across different parts of world.
			</li>
			<li>
				Developed UI for many interesting features for the application, ensuring its successful
				implementation and functionality.
			</li>
			<li>
				Contributed to the development and maintenance of the design system library, ensuring
				consistency and efficiency in UI components across the application.
			</li>
			<li>
				Added unit tests for existing and new features, which helps in tracking possible bugs during
				development of new features.
			</li>
			<li>
				Fixed various production bugs for existing features which improved the overall reliability
				and security of the application.
			</li>
		</ul>
	</div>
	<h3 class="position">Software Engineer</h3>
	<div>
		<b>Roxiler Systems | Pune | Trainee</b>
		<i>Jan 2022 - Apr 2022 | 4 months</i>
		<ul>
			<li>
				Worked on a social media application for senior citizens, which has different features like
				creating and reading posts, adding and following friends etc.
			</li>
			<li>Improved the overall performance of the app by fixing some major bugs.</li>
		</ul>
	</div>
	<br />
	<div>
		<CustomButton buttonText="Know about me" />
	</div>
</section>

<style>
	.experience {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.experience > div {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		gap: 0.2rem;
	}

	.experience > div > ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.position {
		all: unset;
		margin-top: 1rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.position::before {
		content: '';
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		background-color: #383862;
	}
</style>
