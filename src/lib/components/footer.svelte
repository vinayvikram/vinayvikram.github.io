<script>
	import { DateTime } from 'luxon';
</script>

<footer>
	<div>
		<div class="left-text">
			Copyright <i class="fa-solid fa-copyright"></i>
			{DateTime.now().toFormat('yyyy')}
		</div>
		<div class="social">
			<a href="https://github.com/vinayvikram" aria-label="Github profile link">
				<i class="fa-brands fa-github"></i>
			</a>
			<a href="https://linkedin.com/in/vinayvikram" aria-label="Linkedin profile link">
				<i class="fa-brands fa-linkedin"></i>
			</a>
			<a href="https://twitter.com/vinayandvikram" aria-label="Twitter profile link">
				<i class="fa-brands fa-twitter"></i>
			</a>
		</div>
	</div>
	<div class="bottom-text">Developed by <span>Vinay Vikram</span></div>
</footer>

<style>
	footer {
		width: 100%;
		background-color: var(--footer-bg-color);
		color: var(--footer-text-color);
		display: flex;
		flex-direction: column;
	}

	footer > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
	}

	.left-text {
		display: flex;
		font-size: 1rem;
		gap: 10px;
		align-items: center;
	}

	.social {
		display: flex;
		gap: 20px;
		font-size: 1.5rem;
		padding: 2rem;
	}

	.social > a {
		all: unset;
	}

	.bottom-text {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 10px;
		border-top: 1px solid var(--footer-text-color);
		font-size: 1.25rem;
		padding: 5px;
	}

	.bottom-text > span {
		font-family: 'Irish Grover';
		color: var(--logo-color);
		-webkit-text-stroke: 0.5px var(--footer-logo-stroke-color);
		cursor: pointer;
	}

	.bottom-text > span:hover {
		text-shadow: 1px 1px 0.5px var(--footer-text-color);
	}
</style>
