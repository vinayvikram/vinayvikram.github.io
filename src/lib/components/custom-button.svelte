<script lang="ts">
	export let buttonText: string;
</script>

<button class="custom-button">
	{buttonText}
</button>

<style>
	.custom-button {
		all: unset;
		font-style: normal;
		font-size: 2rem;
		background-color: #f68e62;
		padding: 8px 16px;
		border-radius: 12px;
		width: fit-content;
	}
</style>
