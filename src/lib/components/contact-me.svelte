<script lang="ts">
	import CustomButton from './custom-button.svelte';
	import SectionLabel from './section-label.svelte';
	import { createForm } from 'felte';

	let messageStatus: 'sending' | 'success' | 'failed' | null = null;

	const postURL: string =
		'https://script.google.com/macros/s/AKfycbx4RsH_SyPX4lnyCKIVw-ub9DsbNEcS6fkTfzOIYsfA3gBGU4RUI1btrETdVdbA1jEtIA/exec';

	const { form } = createForm({
		onSubmit: async (values) => {
			messageStatus = 'sending';
			try {
				await fetch(postURL, {
					method: 'POST',
					body: JSON.stringify(values)
				})
					.then((res) => res.json())
					.then((res) => {
						if (res.status === 'success') {
							messageStatus = 'success';
						} else {
							messageStatus = 'failed';
						}
					});
			} catch (err) {
				messageStatus = 'failed';
			}
		}
	});
</script>

<SectionLabel label="Contact me" />
<section class="contact-me">
	{#if messageStatus == 'success'}
		<div>Thank you !</div>
		<div>I have received your message.</div>
		<div>I will get back to you.</div>
		<CustomButton
			buttonText="Go Back"
			action={() => {
				messageStatus = null;
			}}
		/>
	{:else}
		<div>Feel free to drop any message.</div>
		<form use:form>
			<input name="name" type="text" placeholder="your name" />
			<input name="email" type="email" placeholder="your email" />
			<textarea name="message" placeholder="your message" rows="10" cols="10" />
			<CustomButton
				buttonText={messageStatus === 'sending' ? 'Sending..' : 'Send Message'}
				buttonType={'submit'}
				disabled={messageStatus === 'sending'}
			/>
		</form>
	{/if}
</section>

<style>
	.contact-me {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-me > div {
		font-size: 1.5rem;
		font-style: italic;
	}

	.contact-me > form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-me input,
	.contact-me textarea {
		font-size: 1rem;
		padding: 5px;
		border-radius: 5px;
	}

	@media only screen and (min-width: 1024px) {
		.contact-me {
			padding: 4rem 6rem;
		}

		.contact-me input {
			width: 40%;
		}

		.contact-me textarea {
			width: 60%;
		}
	}
</style>
