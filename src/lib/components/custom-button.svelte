<script lang="ts">
	export let buttonText: string;
	export let action: () => void;
	export let buttonType: 'button' | 'submit' | 'reset' = 'button';
</script>

<button on:click={action} class="custom-button" type={buttonType}>
	{buttonText}
</button>

<style>
	.custom-button {
		all: unset;
		font-style: normal;
		font-size: 1.5rem;
		background-color: #f68e62;
		padding: 8px 16px;
		border-radius: 12px;
		width: fit-content;
		cursor: pointer;
	}

	.custom-button:hover {
		box-shadow: 2px 2px 1px #a1acce;
	}
</style>
