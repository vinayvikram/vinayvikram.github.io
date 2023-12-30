<script lang="ts">
	import CustomButton from './custom-button.svelte';
	import SectionLabel from './section-label.svelte';
	import { getFormattedRangeAndDuration } from '$lib';
	import { goto } from '$app/navigation';

	const experiences = [
		{
			position: 'Frontend Developer',
			company: 'KAOS',
			location: 'Bangalore',
			employment_type: 'Full-Time',
			joining_date: '2022-03-21',
			leaving_date: null,
			contributions: [
				'Worked on frontend for a Cloud-based application used for tv program scheduling with customers across different parts of world.',
				'Developed UI for many interesting features for the application, ensuring its successful implementation and functionality.',
				'Contributed to the development and maintenance of the design system library, ensuring consistency and efficiency in UI components across the application.',
				'Added unit tests for existing and new features, which helps in tracking possible bugs during development of new features.',
				'Fixed various production bugs for existing features which improved the overall reliability and security of the application.'
			]
		},
		{
			position: 'Software Engineer',
			company: 'Roxiler Systems',
			location: 'Pune',
			employment_type: 'Internship',
			joining_date: '2022-01-19',
			leaving_date: '2022-03-20',
			contributions: [
				'Worked on a social media application for senior citizens, which has different features like creating and reading posts, adding and following friends etc.',
				'Improved overall performance of the app by fixing some major bugs.'
			]
		}
	];

	$: screenWidth = 0;

	// to track show more / less for each experience contributions list
	$: showLess = experiences.map((e) => (screenWidth < 768 ? true : false));

	const toggleShowLess = (index: number) => {
		showLess[index] = !showLess[index];
	};
</script>

<svelte:window bind:innerWidth={screenWidth} />

<SectionLabel label="Experience" />
<section class="experience">
	{#each experiences as experience, index}
		<h3 class="position">{experience.position}</h3>
		<div>
			<div class="location-and-duration">
				<b>
					<i class="fa-solid fa-location-dot"></i>
					{experience.company} | {experience.location} | {experience.employment_type}</b
				>
				<i>
					<i class="fa-solid fa-calendar-days"></i>
					{getFormattedRangeAndDuration(experience.joining_date, experience.leaving_date)}</i
				>
			</div>
			<ul>
				{#each experience.contributions.slice(0, showLess[index] ? 1 : experience.contributions.length) as contribution}
					<li>{contribution}</li>
				{/each}
				<button on:click={() => toggleShowLess(index)}
					>{showLess[index] ? 'show more...' : 'show less'}</button
				>
			</ul>
		</div>
	{/each}
	<br />
	<div>
		<CustomButton buttonText="Know more about me." action={() => goto('/about-me')} />
	</div>
</section>

<style>
	.experience {
		padding: 1rem 1rem 3rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 0.9rem;
	}

	.experience > div {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		gap: 0.2rem;
	}

	.experience .location-and-duration {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.experience > div > ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 1rem;
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

	.experience button {
		all: unset;
		color: #383862;
		cursor: pointer;
		width: fit-content;
		font-style: italic;
		font-weight: bold;
	}

	@media only screen and (min-width: 1024px) {
		.experience {
			padding: 3rem 4rem;
		}

		.experience > div > ul {
			font-size: 1.25rem;
		}

		.experience .location-and-duration {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
