document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    updateValidity();
    if(event.target.checkValidity()) {
        document.getElementById('success-dialog').show();
    }
});

function updateValidity() {
    const emailInput = document.getElementById('email');
    const emailRequired = document.getElementById('email-required');
    const emailInvalid = document.getElementById('email-invalid');

    if(!emailInput.validity.valid){
        if(emailInput.validity.valueMissing) {
            emailRequired.classList.remove('sr-only');
            emailInvalid.classList.add('sr-only');
        }else if(emailInput.validity.typeMismatch) {
            emailInvalid.classList.remove('sr-only');
            emailRequired.classList.add('sr-only');
        }            
    }

    const radiobuttons = document.querySelector('[role="radiogroup"]');
    if(![...radiobuttons.elements].some(radio => radio.checked)) {
        radiobuttons.ariaInvalid = 'true';
        radiobuttons.validity.valueMissing = true;
        radiobuttons.validity.valid = false;
    }else{
        radiobuttons.ariaInvalid = 'false';
        radiobuttons.validity.valueMissing = false;
        radiobuttons.validity.valid = true;
    }
}