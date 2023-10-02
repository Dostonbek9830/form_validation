const elForm = document.querySelector('.form');
const elNameInput = document.querySelector('.name-input');
const elEmailInput = document.querySelector('.email-input');
const elTelInput = document.querySelector('.tel-input');
const elTextareaInput = document.querySelector('.message-input');
const elNameError = document.querySelector('.error-js-name');
const elTelError = document.querySelector('.error-js-tel');
const elEmailError = document.querySelector('.error-js-email');
const elMessageError = document.querySelector('.error-js-message');

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const nameValue = elNameInput.value.trim();
    const telValue = elTelInput.value.trim();
    const emailValue = elEmailInput.value.trim();
    const textareaValue = elTextareaInput.value.trim();

    if(!nameValue && !telValue && !emailValue && !textareaValue) {
        elNameError.textContent = "Name cannot be empty"
        elNameError.classList.add("invalid-name")
        elTelError.textContent = "Phone number cannot be empty"
        elTelError.classList.add("invalid-tel")
        elEmailError.textContent = "Email cannot be empty"
        elEmailError.classList.add("invalid-email")
        elMessageError.textContent = "Message field cannot be empty"
        elMessageError.classList.add("invalid-message")
        elNameInput.classList.add("invalid-value")
        elTelInput.classList.add("invalid-value")
        elEmailInput.classList.add("invalid-value")
        elTextareaInput.classList.add("invalid-value")
        return
    }

    if(!nameValue) {
        elNameError.textContent = "Name cannot be empty"
        elNameError.classList.add("invalid-name")
        elNameInput.classList.add("invalid-value")
        return
    }

    if (nameValue.length < 2) {
        elNameError.textContent = "Name must be at least two letters"
        elNameError.classList.add("invalid-name")
        elNameInput.classList.add("invalid-value")
        return
    } else if (nameValue.length > 50) {
        elNameError.textContent = "Name must not exceed fifty letters"
        elNameError.classList.add("invalid-name")
        elNameInput.classList.add("invalid-value")
        return
    } else {
        elNameError.style.display = "none";
        elNameInput.classList.add("valid-value")
    }

    if(!telValue) {
        elTelError.textContent = "Phone number cannot be empty"
        elTelError.classList.add("invalid-tel")
        elTelInput.classList.add("invalid-value")
        return
    }

    if (telValue.length < 13 && !telValue.startsWith("+998")) {
        elTelError.textContent = "Phone number must be with international code"
        elTelError.classList.add("invalid-tel")
        elTelInput.classList.add("invalid-value")
        return
    } else {
        elTelError.style.display = "none";
        elTelInput.classList.add("valid-value")
    }

    if(!emailValue) {
        elEmailError.textContent = "Email cannot be empty"
        elEmailError.classList.add("invalid-email")
        elEmailInput.classList.add("invalid-value")
        return
    }
    if (emailValue !== emailValue.toLowerCase()) {
        elEmailError.textContent = "Email must be lowercase";
        elEmailError.classList.add("invalid-email");
        elEmailInput.classList.add("invalid-value");
        return;
    } else if (!emailValue.endsWith("@gmail.com") && !emailValue.endsWith("@yahoo.com") && !emailValue.endsWith("@mail.ru")) {
        elEmailError.textContent = "Email must end with @gmail.com, @yahoo.com or @mail.ru";
        elEmailError.classList.add("invalid-email");
        elEmailInput.classList.add("invalid-value");
        return;
    } else {
        elEmailError.style.display = "none";
        elEmailInput.classList.add("valid-value");
    }
    

    if(!textareaValue) {
        elMessageError.textContent = "Message field cannot be empty"
        elMessageError.classList.add("invalid-message")
        elTextareaInput.classList.add("invalid-value")
    }

    if(textareaValue.length < 5) {
        elMessageError.textContent = "Message must be at least five letters"
        elMessageError.classList.add("invalid-message")
        elTextareaInput.classList.add("invalid-value")
        return
    } else if(textareaValue.length > 50) {
        elMessageError.textContent = "Message must not exceed fifty letters"
        elMessageError.classList.add("invalid-message")
        elTextareaInput.classList.add("invalid-value")
        return
    } else {
        elMessageError.style.display = "none"
        elTextareaInput.classList.add("valid-value")
    }
});