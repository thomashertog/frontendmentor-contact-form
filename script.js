document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    updateTextValidity();
    updateEmailValidity();
    updateRadioValidity();
    if (event.target.checkValidity()) {
        const dialog = document.getElementById('success-dialog');
        dialog.show();
        setTimeout(() => dialog.close(), 5000);
    }
});

document.getElementById('email').addEventListener('change', updateEmailValidity);
document.querySelectorAll('[role="radiogroup"] input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateRadioValidity);
});
document.getElementById('first-name').addEventListener('change', updateFirstNameValidity);
document.getElementById('last-name').addEventListener('change', updateLastNameValidity);
document.getElementById('message').addEventListener('change', updateMessageValidity);


function updateEmailValidity() {
    const emailInput = document.getElementById('email');
    const emailRequired = document.getElementById('email-required');
    const emailInvalid = document.getElementById('email-invalid');

    if (!emailInput.validity.valid) {
        if (emailInput.validity.valueMissing) {
            emailRequired.classList.remove('sr-only');
            emailInvalid.classList.add('sr-only');
        } else if (emailInput.validity.typeMismatch) {
            emailInvalid.classList.remove('sr-only');
            emailRequired.classList.add('sr-only');
        }
    }
}

function updateRadioValidity() {
    const radiobuttons = document.querySelector('[role="radiogroup"]');
    if (![...radiobuttons.elements].some(radio => radio.checked)) {
        radiobuttons.ariaInvalid = 'true';
        radiobuttons.validity.valueMissing = true;
        radiobuttons.validity.valid = false;
    } else {
        radiobuttons.ariaInvalid = 'false';
        radiobuttons.validity.valueMissing = false;
        radiobuttons.validity.valid = true;
    }
}

function updateTextValidity() {
    updateFirstNameValidity();
    updateLastNameValidity();
    updateMessageValidity();
}

function updateFirstNameValidity() {
    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
        firstName.validity.valueMissing = true;
        firstName.validity.valid = false;
        firstName.ariaInvalid = 'true';
    }
}

function updateLastNameValidity() {
    const lastName = document.getElementById('last-name');
    if (lastName.value.trim() === '') {
        lastName.validity.valueMissing = true;
        lastName.validity.valid = false;
        lastName.ariaInvalid = 'true';
    }
}

function updateMessageValidity() {
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        message.validity.valueMissing = true;
        message.validity.valid = false;
        message.ariaInvalid = 'true';
    }
}