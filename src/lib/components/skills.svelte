<script>
	import SectionLabel from './section-label.svelte';
</script>

<SectionLabel label="Skills" />
<section class="skills">
	<ul>
		<li>
			<img src="/svg/html5.svg" alt="html" />
			HTML5
		</li>
		<li>
			<img src="/svg/css3.svg" alt="css" />
			CSS3
		</li>
		<li>
			<img src="/svg/javascript.svg" alt="javascript" />
			Javascript
		</li>
		<li>
			<img src="/svg/typescript.svg" alt="typescript" />
			Typescript
		</li>
		<li>
			<img src="/svg/git.svg" alt="git" />
			Git
		</li>
		<li>
			<img src="/svg/react.svg" alt="react" />
			React
		</li>
		<li>
			<img src="/svg/svelte.svg" alt="svelte" />
			Svelte
		</li>
	</ul>
</section>

<style>
	.skills > ul {
		all: unset;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		font-family: monospace;
		padding: 3rem;
	}

	.skills > ul > li {
		all: unset;
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		width: 4rem;
	}

	img {
		width: 4rem;
		height: 4rem;
	}

	i {
		font-size: 4rem;
	}
</style>
