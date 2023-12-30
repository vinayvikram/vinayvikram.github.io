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
			} finally {
				if (messageStatus == 'sending') {
					messageStatus = null;
				}
			}
		}
	});
</script>

<SectionLabel label="Contact me" />
<section class="contact-me">
	<div>Feel free to drop any message.</div>
	<form use:form>
		<input name="name" type="text" placeholder="your name" />
		<input name="email" type="email" placeholder="your email" />
		<textarea name="message" placeholder="your message" rows="20" cols="20" />
		<CustomButton buttonText={'Send Message'} buttonType={'submit'} />
	</form>
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
			width: 50%;
		}

		.contact-me textarea {
			width: 80%;
		}
	}
</style>
