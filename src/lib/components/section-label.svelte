<script lang="ts">
	export let label: String;
</script>

<h2 class="section-label">
	{label}
</h2>

<style>
	.section-label {
		all: unset;
		background-color: var(--section-label-bg-color);
		font-size: 2rem;
		color: var(--section-label-text-color);
		width: fit-content;
		padding: 8px 16px;
		border-radius: 0 8px 8px 0;
	}
</style>
