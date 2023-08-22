var elForm = document.querySelector('.form');
var elFirstName = document.querySelector('.first-name');
var elLastName = document.querySelector('.last-name');
var elSubmit = document.querySelector('.form-submit');
var elError = document.querySelector(".error-span");

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // Display value of input first name
    var firstNameValue = elFirstName.value.trim();

    // Display first character of input first name 
    var firstCharacter = firstNameValue.charAt(0);

    if (firstCharacter != firstCharacter.toUpperCase()) {
        elFirstName.classList.add('error-input')
        elError.style.display = 'block'

    } else {
        elError.style.display = 'none'
        elFirstName.classList.add('valid-input')
        return;
    }
});