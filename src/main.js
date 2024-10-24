const radioBtnOne = document.querySelector("#radio-1");
const radioBtnTwo = document.querySelector("#radio-2");
const checkBox = document.querySelector("#check");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const inputs = [nameInput, surnameInput, emailInput];
const radios = [radioBtnOne, radioBtnTwo];
const radioArray = document.querySelectorAll(".main__form-radio-wrapper-input");
const textError = document.querySelectorAll(".main__form-wrapper-error");
const mainBtn = document.querySelector(".main__form-btn");
const form = document.querySelector(".main__form");
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const handleRadio = () => {
	if (radioBtnOne.checked || radioBtnTwo.checked) {
		textError[3].style.display = "none";
	} else {
		textError[3].style.display = "block";
		textError[3].textContent = "Please select a query type";
	}
};

radios.forEach(radio => {
	radio.addEventListener("click", () => {
        radios.forEach(r => {
            if (r.checked) {
                r.closest(".main__form-radio-wrapper").style.backgroundColor = "hsl(148, 38%, 91%)";
            } else {
                r.closest(".main__form-radio-wrapper").style.backgroundColor = "white";
            }
        })
	});
});

const checkCheck = () => {
	if (checkBox.checked) {
		textError[5].style.display = "none";
	} else {
		textError[5].style.display = "block";
	}
};

const checkEmail = () => {
	const emailSister = emailInput.nextElementSibling;
	if (regEmail.test(emailInput.value)) {
		checkInputs();
	} else {
		emailInput.style.border = "1px solid hsl(0, 66%, 54%)";
		emailSister.textContent = "Email is invalid";
		emailSister.style.display = "block";
	}
};

const checkMessage = () => {
	if (messageInput.value === "") {
		messageInput.style.border = "1px solid hsl(0, 66%, 54%)";
		messageInput.nextElementSibling.style.display = "block";
		messageInput.nextElementSibling.textContent = "This field is required";
	} else if (messageInput.value.length < 10) {
		messageInput.style.border = "1px solid hsl(0, 66%, 54%)";
		messageInput.nextElementSibling.textContent = "There must be a minimum of 10 characters";
		messageInput.nextElementSibling.style.display = "block";
	} else {
		messageInput.style.border = "1px solid hsl(186, 15%, 59%)";
		messageInput.nextElementSibling.style.display = "none";
	}
};

const checkInputs = () => {
	const emailSister = emailInput.nextElementSibling;

	inputs.forEach(input => {
		if (input.value === "") {
			input.style.border = "1px solid hsl(0, 66%, 54%)";
			input.nextElementSibling.style.display = "block";
			input.nextElementSibling.textContent = "This field is required";
		} else if (input.value.length < 4) {
			input.style.border = "1px solid hsl(0, 66%, 54%)";
			input.nextElementSibling.style.display = "block";
			input.nextElementSibling.textContent = "There must be a minimum of 4 characters";
		} else if (!regEmail.test(emailInput.value)) {
			emailInput.style.border = "1px solid hsl(0, 66%, 54%)";
			emailSister.textContent = "Email is invalid";
			emailSister.style.display = "block";
		} else {
			input.style.border = "1px solid hsl(186, 15%, 59%)";
			input.nextElementSibling.style.display = "none";
		}
	});

	handleRadio();
	checkCheck();
	checkMessage();
	checkCheck();
};

radioArray.forEach(radio => {
	radio.addEventListener("click", () => {
		radioArray.forEach(box => {
			const boxImg = box.previousElementSibling;
			if (box.checked) {
				box.style.opacity = "0";
				boxImg.style.opacity = "1";
			} else {
				boxImg.style.opacity = "0";
				box.style.opacity = "1";
			}
		});
	});
});

const checkRadio = () => {
	radioArray.forEach(radio => {
		if (radio.checked === false) {
			radio.style.display = "block";
			radioImg.style.display = "none";
		} else {
			radio.style.display = "none";
			radioImg.style.display = "block";
		}
	});
};

const checkError = () => {
	return Array.from(textError).every(err => err.style.display !== "block");
};

window.onload = () => {
	radioBtnOne.checked = false;
	radioBtnTwo.checked = false;
	inputs.forEach(input => {
		input.value = "";
	});

	messageInput.value = "";
	checkBox.checked = false;
};

checkBox.addEventListener("click", () => {
	if (checkBox.checked) {
		checkBox.style.opacity = "0";
	} else {
		checkBox.style.opacity = "1";
	}
});

checkBox.addEventListener("click", () => {
	textError[5].style.display = "none";
});

radios.forEach(radio => {
	radio.addEventListener("focus", () => {
		textError[3].style.display = "none";
	});
});

mainBtn.addEventListener("click", () => {
	event.preventDefault();
	checkInputs();

	if (checkError()) form.submit();
});
