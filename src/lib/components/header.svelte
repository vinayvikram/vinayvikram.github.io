<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigating, page } from '$app/stores';

	export let theme: 'LIGHT' | 'DARK';
	export let toggleTheme: () => void;

	let isMenuHidden: boolean = true;

	const toggleMenu = () => {
		isMenuHidden = !isMenuHidden;
	};

	$: if ($navigating) isMenuHidden = true;
</script>

<header class={isMenuHidden ? 'menu-hidden' : 'menu-visible'}>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions-->
	<h1 class="full-logo" on:click={() => goto('/')}>Vinay Vikram</h1>

	<ul class="nav-bar">
		<li class={$page.url.pathname === '/' ? 'active' : ''}>
			<a href="/">
				<i class="fa-solid fa-house"></i>
				Home
			</a>
		</li>
		<li class={$page.url.pathname === '/about-me' ? 'active' : ''}>
			<a href="/about-me">
				<i class="fa-solid fa-user"></i>
				About me
			</a>
		</li>
		<li class={$page.url.pathname === '/projects' ? 'active' : ''}>
			<a href="/projects">
				<i class="fa-solid fa-briefcase"></i>
				Projects
			</a>
		</li>
		<li class={$page.url.pathname === '/contact-me' ? 'active' : ''}>
			<a href="/contact-me">
				<i class="fa-solid fa-envelope"></i>
				Contact me
			</a>
		</li>
	</ul>

	<button class="theme-toggle-button" on:click={toggleTheme} aria-label="toggle theme">
		<i class={`fa-solid ${theme === 'DARK' ? 'fa-moon' : 'fa-sun'}`}></i>
	</button>

	<button class="download-resume-button">
		<a href="/resume.pdf" download="Resume-Vinay-Vikram.pdf">
			<i class="fa-solid fa-download"></i>
			My Resume
		</a>
	</button>

	<button
		class={`menu-button ${isMenuHidden ? 'rotate-back' : 'rotate'}`}
		on:click={toggleMenu}
		aria-label="menu"
	>
		<i class="fa-solid fa-bars"></i>
	</button>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		flex-direction: column;
		box-shadow: 2px 2px 2px var(--bg-gradient-end-color);
		overflow: hidden;
		background-color: var(--bg-gradient-start-color);
	}
	.full-logo {
		all: unset;
		width: fit-content;
		font-family: 'Irish Grover';
		color: var(--logo-color);
		font-size: 2rem;
		-webkit-text-stroke: 1px var(--logo-stroke-color);
		cursor: pointer;
		padding: 0 1.25rem;
		user-select: none;
	}

	.full-logo::first-letter {
		font-size: 4rem;
		text-shadow: 1px 1px 0.5px var(--text-color);
	}

	.full-logo:hover {
		text-shadow: 1px 1px 0.5px var(--text-color);
	}

	.menu-hidden {
		height: 5rem;
		transition: height 0.3s linear;
	}

	.menu-visible {
		height: 25rem;
		transition: height 0.3s linear;
	}

	.nav-bar {
		all: unset;
		list-style: none;
		display: flex;
		flex-direction: column;
		font-size: 1.25rem;
		gap: 1.25rem;
		padding: 1.25rem;
	}

	.nav-bar a {
		all: unset;
		display: inline-block;
		width: 100%;
		cursor: pointer;
		padding: 8px 16px;
	}

	.nav-bar > li:hover,
	.nav-bar > li.active {
		background-color: var(--nav-hover-bg-color);
		color: var(--nav-hover-color);
		border-radius: 4px;
	}

	.theme-toggle-button {
		all: unset;
		padding: 0.25rem;
		font-size: 1.5rem;
		position: absolute;
		right: calc(20px + 2rem + 10px);
		top: 20px;
		cursor: pointer;
		width: 1.5rem;
		text-align: center;
	}

	.theme-toggle-button:hover {
		background-color: var(--nav-hover-bg-color);
		color: var(--nav-hover-color);
		border-radius: 4px;
	}

	.download-resume-button {
		all: unset;
		width: fit-content;
		font-size: 1.25rem;
		color: var(--download-text-color);
		background-color: var(--download-bg-color);
		border-radius: 8px;
		padding: 8px 16px;
		cursor: pointer;
		margin: 0 1.25rem;
	}

	.download-resume-button > a {
		all: unset;
	}

	.download-resume-button:hover {
		box-shadow: 2px 2px 1px var(--button-hover-bg-color);
	}

	.menu-button {
		all: unset;
		font-size: 2rem;
		position: absolute;
		right: 20px;
		top: 20px;
	}

	.menu-button.rotate {
		transform: rotate(90deg);
		transition: transform 0.3s linear;
	}

	.menu-button.rotate-back {
		transform: (0deg);
		transition: transform 0.3s linear;
	}

	@media only screen and (min-width: 1024px) {
		header.menu-hidden,
		header.menu-visible {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.theme-toggle-button {
			position: unset;
		}
		.menu-button {
			display: none;
		}

		.nav-bar {
			flex-direction: row;
			padding: 0;
		}
	}
</style>
