<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<div class="flex-container">
	<header>
		<h1>Vinay Vikram</h1>
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
		<span class="download-resume">
			<i class="fa-solid fa-download"></i>
			My Resume
		</span>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<div>
			<div class="social">
				<div>Connect on Social</div>
				<div>
					<i class="fa-brands fa-x-twitter"></i>
					<i class="fa-brands fa-linkedin"></i>
					<i class="fa-brands fa-github"></i>
				</div>
			</div>
			<div class="visitor-info"></div>
		</div>
		<div class="bottom-text">Developed by <span>Vinay Vikram</span></div>
	</footer>
</div>

<style>
	.flex-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	header {
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		box-shadow: 2px 2px 2px #a1acce;
	}
	header > h1 {
		all: unset;
		font-family: 'Irish Grover';
		color: #da693f;
		font-size: 2rem;
		-webkit-text-stroke: 1px black;
		cursor: pointer;
	}

	header > h1::first-letter {
		font-size: 4rem;
		text-shadow: 1px 1px 0.5px black;
	}

	header > h1:hover {
		text-shadow: 1px 1px 0.5px black;
	}

	.nav-bar {
		list-style: none;
		display: flex;
		font-size: 1.25rem;
		gap: 3rem;
	}

	.nav-bar > li {
		padding: 4px 8px;
		cursor: pointer;
	}

	.nav-bar > li:hover {
		background-color: #a1acce;
		border-radius: 4px;
	}

	.download-resume {
		font-size: 1.25rem;
		color: #f5f4f2;
		background-color: #386238;
		border-radius: 8px;
		padding: 8px 16px;
		cursor: pointer;
	}

	.download-resume:hover {
		box-shadow: 2px 2px 1px #a1acce;
	}

	main {
		flex: 1;
		padding: 0 20px;
		background: linear-gradient(#f5f4f2, #a1acce);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}

	footer {
		width: 100%;
		background-color: #383862;
		color: #f5f4f2;
		display: flex;
		flex-direction: column;
	}

	.social {
		display: flex;
		gap: 20px;
		font-size: 1.5rem;
		padding: 2rem;
	}

	.social > div {
		display: flex;
		gap: 10px;
	}

	.bottom-text {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 10px;
		border-top: 1px solid white;
		font-size: 1.25rem;
		padding: 5px;
	}

	.bottom-text > span {
		font-family: 'Irish Grover';
		color: #da693f;
		-webkit-text-stroke: 0.5px black;
		cursor: pointer;
	}

	.bottom-text > span:hover {
		text-shadow: 1px 1px 0.5px black;
	}
</style>
