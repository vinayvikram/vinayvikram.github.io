<script>
	import CustomButton from './custom-button.svelte';
	import SectionLabel from './section-label.svelte';
	import { createForm } from 'felte';

	const { form } = createForm({
		onSubmit: () => {
			console.log('Submitted');
		}
	});
</script>

<SectionLabel label="Contact me" />
<section class="contact-me">
	<div>Feel free to drop any message.</div>
	<form use:form>
		<input type="text" placeholder="your name" />
		<input type="email" placeholder="your email" />
		<textarea placeholder="your message" rows="20" cols="20" />
		<CustomButton buttonText="Send Message" action={() => {}} buttonType={'submit'} />
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
