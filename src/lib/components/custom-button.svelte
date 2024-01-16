<script lang="ts">
	export let buttonText: string;
	export let action: () => void = () => {};
	export let buttonType: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button on:click={action} class="custom-button" type={buttonType} {disabled}>
	{buttonText}
</button>

<style>
	.custom-button {
		all: unset;
		font-style: normal;
		font-size: 1.5rem;
		background-color: var(--button-bg-color);
		color: var(--button-text-color);
		padding: 8px 16px;
		border-radius: 12px;
		width: fit-content;
		cursor: pointer;
	}

	.custom-button:disabled {
		opacity: 0.8;
	}

	.custom-button:hover {
		box-shadow: 2px 2px 1px var(--button-hover-bg-color);
	}
</style>
