function showPage(pageName) {
    if (pageName == 'forgetID') {
        // change items
        var userIDLabel = document.getElementById("userIDLabel");
        userIDLabel.textContent = "Account or card number";
        var userIDInput = document.getElementById("userIDInput");
        userIDInput.setAttribute('type', 'number');
        var userPasswordLabel = document.getElementById("userPasswordLabel");
        userPasswordLabel.textContent = "Last 5 digits of your SSN"
        var userPasswordInput = document.getElementById("userPasswordInput");
        userPasswordInput.setAttribute('type', 'number');
        var loginForm = document.getElementById('loginForm');
        // Remove content
        var R_FI = document.querySelector(".forgetID a");
        if (R_FI) {
            R_FI.parentNode.removeChild(R_FI);
        }
        var R_F = document.querySelector(".forget");
        if (R_F) {
            R_F.parentNode.removeChild(R_F);
        }
        var R_R = document.querySelector(".register");
        if (R_R) {
            R_R.parentNode.removeChild(R_R);
        }
        var R_B = document.getElementById("Submit");
        if (R_B) {
            R_B.remove();
        }
        // zipcode
        var zipcodeBox = document.createElement('div');
        zipcodeBox.classList.add('inputbox');
        var ionIcon1 = document.createElement('ion-icon');
        ionIcon1.setAttribute('name', 'mail-outline');
        var zipcode = document.createElement('input');
        zipcode.setAttribute('type', 'number');
        zipcode.setAttribute('required', '');
        var newLabel1 = document.createElement('label');
        newLabel1.setAttribute('for', '');
        newLabel1.textContent = 'ZIP code';
        zipcodeBox.appendChild(ionIcon1);
        zipcodeBox.appendChild(zipcode);
        zipcodeBox.appendChild(newLabel1);
        loginForm.appendChild(zipcodeBox);
        // Submit button
        var SubmitButton = document.createElement('button');
        SubmitButton.textContent = 'Submit';
        SubmitButton.setAttribute('id', 'Submit');
        loginForm.appendChild(SubmitButton);
    }
}
