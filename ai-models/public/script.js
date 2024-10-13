// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
	// Check if a div with the class 'summarizer' exists
	const summarizerDiv = document.querySelector(".summarizer");

	if (summarizerDiv) {
		// Get references to the textarea and submit button
		const textarea = summarizerDiv.querySelector(
			".left-editor form textarea"
		);
		const submitButton = summarizerDiv.querySelector(
			'.left-editor form input[type="submit"]'
		);

		// Function to validate input and enable/disable submit button
		const validateInput = () => {
			const textLength = textarea.value.trim().length;
			submitButton.disabled = !(textLength > 200 && textLength < 100000);
		};

		// Run initial validation in case textarea already has text
		validateInput();

		// Add an input event listener to validate dynamically on user input
		textarea.addEventListener("input", validateInput);
	}
});
