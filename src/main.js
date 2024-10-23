const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const radioOneInput = document.querySelector("#radio-1");
const radioTwoInput = document.querySelector("#radio-2");
const inputs = [nameInput, surnameInput, emailInput];
const errorText = document.querySelectorAll(".main__form-wrapper-error");
const btn = document.querySelector(".main__form-btn");
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const setError = (input, index, message) => {
	input.style.border = "1px solid hsl(0, 66%, 54%)";
	errorText[index].style.display = "block";
	errorText[index].textContent = message;
};

const boxError = (input, index, message) => {
	errorText[index].style.display = "block";
	errorText[index].textContent = message;
};

const clearError = (input, index) => {
	errorText[index].style.display = "none";
	input.style.border = "1px solid hsl(186, 15%, 59%)";
};

const checkInputs = (input, index) => {
	if (input.value === "" || input.value.length < 4) {
		setError(input, index, "This field is required");
	} else if (input.id === 'email' && !emailRegex.test(emailInput.value)) {
		setError(input, index, "Please enter a valid email address");
	} else {
		clearError(input, index);
	}
};

btn.addEventListener("click", () => {
	event.preventDefault();
	inputs.forEach((input, index) => checkInputs(input, index))
});

window.onload = () => {
	inputs.forEach(input => {
		input.checked = false;
		input.value = "";
	});
};
