<script lang="ts">
	export let buttonText: string;
	export let action: () => void;
</script>

<button on:click={action} class="custom-button">
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
</style>
