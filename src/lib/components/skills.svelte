<script>
	import SectionLabel from './section-label.svelte';
	import CustomButton from './custom-button.svelte';

	const skills = [
		{
			name: 'HTML',
			icon: '/svg/html5.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
		},
		{
			name: 'CSS',
			icon: '/svg/css3.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: 'Javascript',
			icon: '/svg/javascript.svg',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'Typescript',
			icon: '/svg/typescript.svg',
			link: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Git',
			icon: '/svg/git.svg',
			link: 'https://git-scm.com/'
		},
		{
			name: 'React',
			icon: '/svg/react.svg',
			link: 'https://react.dev/'
		},
		{
			name: 'Svelte',
			icon: '/svg/svelte.svg',
			link: 'https://svelte.dev/'
		}
	];
</script>

<SectionLabel label="Skills" />
<section class="skills">
	<ul>
		{#each skills as skill}
			<li>
				<a href={skill.link} target="_blank">
					<img src={skill.icon} alt={skill.name} />
					{skill.name}
				</a>
			</li>
		{/each}
	</ul>
	<div>
		<CustomButton buttonText="Connect with me." />
	</div>
</section>

<style>
	.skills {
		padding: 3rem;
	}
	.skills > ul {
		all: unset;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		font-family: monospace;
	}

	.skills li {
		all: unset;
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		width: 5.5rem;
	}

	.skills a {
		all: unset;
		text-align: center;
		cursor: pointer;
	}

	.skills img {
		width: 4rem;
		height: 4rem;
	}

	.skills > div {
		margin: 2rem 0;
	}

	@media only screen and (min-width: 1024px) {
		.skills {
			padding: 3rem 6rem;
		}

		.skills img {
			width: 6rem;
			height: 6rem;
		}
	}
</style>
