const radioBtnOne = document.querySelector("#radio-1");
const radioBtnTwo = document.querySelector("#radio-2");
const checkBox = document.querySelector("#check");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const inputs = [nameInput, surnameInput, emailInput];
// const radios = [radioBtnOne, radioBtnTwo];
const radioArray = document.querySelectorAll(".main__form-radio-wrapper-input");
const radioError = document.querySelector(".main__form-wrapper-error");
const mainBtn = document.querySelector(".main__form-btn");
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const handleRadio = () => {
const errorText = insertAdjacentHTML

    
	if (radioBtnOne.checked && radioBtnTwo.checked) {
        radioError.style.display = 'none'
	} else {
        radioError.style.display = 'block'
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

window.onload = () => {
	radioBtnOne.checked = false;
	radioBtnTwo.checked = false;
	inputs.forEach(input => {
		input.value = "";
	});
};

checkBox.addEventListener("click", () => {
	if (checkBox.checked) {
		checkBox.style.opacity = "0";
	} else {
		checkBox.style.opacity = "1";
	}
});

mainBtn.addEventListener("click", () => {
	event.preventDefault();
	checkInputs();
    handleRadio()
});

// else if (!regEmail.test(emailInput.value)) {
// 			checkEmail()
// 		}
