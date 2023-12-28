<script>
	let isMenuHidden = true;

	const toggleMenu = () => {
		isMenuHidden = !isMenuHidden;
	};
</script>

<header class={isMenuHidden ? 'menu-hidden' : 'menu-visible'}>
	<h1 class="full-logo">Vinay Vikram</h1>

	<ul class="nav-bar">
		<li>
			<i class="fa-solid fa-house"></i>
			Home
		</li>
		<li>
			<i class="fa-solid fa-user"></i>
			About me
		</li>
		<li>
			<i class="fa-solid fa-briefcase"></i>
			Projects
		</li>
		<li>
			<i class="fa-solid fa-envelope"></i>
			Contact me
		</li>
	</ul>
	<button class="download-resume-button">
		<i class="fa-solid fa-download"></i>
		My Resume
	</button>

	<button class={`menu-button ${isMenuHidden ? 'rotate-back' : 'rotate'}`} on:click={toggleMenu}>
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
		box-shadow: 2px 2px 2px #a1acce;
		overflow: hidden;
		background-color: #f5f4f2;
	}
	.full-logo {
		all: unset;
		width: fit-content;
		font-family: 'Irish Grover';
		color: #da693f;
		font-size: 2rem;
		-webkit-text-stroke: 1px black;
		cursor: pointer;
		padding: 0 1.25rem;
	}

	.full-logo::first-letter {
		font-size: 4rem;
		text-shadow: 1px 1px 0.5px black;
	}

	.full-logo:hover {
		text-shadow: 1px 1px 0.5px black;
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

	.nav-bar > li {
		padding: 8px 16px;
		cursor: pointer;
	}

	.nav-bar > li:hover {
		background-color: #a1acce;
		border-radius: 4px;
	}

	.download-resume-button {
		all: unset;
		width: fit-content;
		font-size: 1.25rem;
		color: #f5f4f2;
		background-color: #386238;
		border-radius: 8px;
		padding: 8px 16px;
		cursor: pointer;
		margin: 0 1.25rem;
	}

	.download-resume-button:hover {
		box-shadow: 2px 2px 1px #a1acce;
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
			height: fit-content;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
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