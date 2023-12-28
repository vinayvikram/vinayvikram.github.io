<script>
	import SectionLabel from './section-label.svelte';
</script>

<SectionLabel label="Skills" />
<section class="skills">
	<ul>
		<li>
			<img src="/images/html-5.png" alt="typescript" />
			HTML5
		</li>
		<li>
			<img src="/images/css-3.png" alt="typescript" />
			CSS3
		</li>
		<li>
			<img src="/images/js.png" alt="typescript" />
			Javascript
		</li>
		<li>
			<img src="/images/typescript.png" alt="typescript" />
			Typescript
		</li>
		<li>
			<img src="/images/git.png" alt="typescript" />
			Git
		</li>
		<li>
			<img src="/images/react.png" alt="typescript" />
			React
		</li>
		<li>
			<img src="/images/svelte.png" alt="typescript" />
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
