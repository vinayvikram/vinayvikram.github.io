<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<!-- <footer>
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
</footer> -->

<style>
	main {
		margin-top: 5rem;
		height: calc(100% - 5rem);
		background: linear-gradient(#f5f4f2, #a1acce);
		background-repeat: no-repeat;
		background-attachment: fixed;
		overflow-y: auto;
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
