var elForm = document.querySelector('.form');
var elFirstName = document.querySelector('.first-name');
var elLastName = document.querySelector('.last-name');
var elSubmit = document.querySelector('.form-submit');
var elError = document.querySelector(".error-span");
// var elNumberError = document.querySelector(".error-last-name")
// var elNotEntered = document.querySelector(".not-entered");

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // Display value of input first name
    var firstNameValue = elFirstName.value.trim();

    // Display first character of input first name 
    var firstCharacter = firstNameValue.charAt(0);

    if (firstCharacter != firstCharacter.toUpperCase() || !isNaN(firstCharacter)) {
        elFirstName.classList.add('error-input')
        elError.style.display = 'block'
        return;
    } else {
        elFirstName.classList.add('valid-input');
        elError.style.display = 'none'
    } 

    // if (firstCharacter == "") {
    //     elFirstName.classList.add('error-input');
    //     elNotEntered.style.display = 'block'
    // } else {
    //     elFirstName.classList.add('valid-input')
    //     elNotEntered.style.display = 'none'
    // }

    // var lastNameValue = elLastName.value.trim();

    // var lastNameCharacter = lastNameValue.charAt(0);

    // if (!isNaN(lastNameCharacter)) {
    //     elLastName.classList.add('error-input')
    //     elNumberError.style.display = 'block'
    // } else {
    //     elNumberError.style.display = 'none'
    //     elLastName.classList.add('valid-input')
    //     return;
    // }
});