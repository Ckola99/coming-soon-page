document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('email-form');
	const emailInput = document.getElementById('email-input');
	const errorIcon = document.getElementById('error-icon');
	const errorText = document.getElementById('error-text');
	const errorBorder = document.getElementById('email-form')

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const emailValue = emailInput.value;

		// Simple email regex for basic validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailValue || !emailPattern.test(emailValue)) {
			errorText.classList.add('visible');
			errorIcon.style.display = 'block';
			errorBorder.style.border = '0.25px solid red';

		} else {
			form.classList.remove('error');
			errorText.classList.remove('visible');
			errorIcon.style.display = 'none';
			// Optionally, submit the form here or do something else
			console.log("Email is valid, form can be submitted.");
		}
	});

	emailInput.addEventListener('input', () => {
		form.classList.remove('error');
		errorText.classList.remove('visible');
		errorIcon.style.display = 'none';
		errorBorder.style.border = '0.25px solid hsl(0, 36%, 70%)'
	});
});
