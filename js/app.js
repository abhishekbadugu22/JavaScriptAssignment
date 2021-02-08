
// get Elements By ID----------

const submit = document.getElementById('submit');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const phoneNo = document.getElementById('phoneNo');
const officeNo = document.getElementById('officeNo');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const biking = document.getElementById('checkbox_sample18');
const reading = document.getElementById('checkbox_sample19');
const playing = document.getElementById('checkbox_sample20');

let gender;


// Add Event Listener-----------

submit.addEventListener('click' , (e) => {
    e.preventDefault();

    validateForm();
});

function validateForm() {


    // Validate First Name-----
    const firstNameVal = firstName.value.trim();

    const minLetter = 3;
    const maxLetter = 12;

    if (firstNameVal === '') {
        setAlert('First Name Cannot be Empty!');
        firstName.focus();
    }
    else if (firstNameVal.length < 3 || firstNameVal.length > 12) {
        setAlert('First Name Length Should be between 3 to 12 Letters!');
    }
    else if (!isNaN(firstNameVal)) {
        setAlert('First Name Cannot contain numbers!');
    }
    else if (!isNameValid(firstNameVal)) {
        setAlert('Invalid First Name');
    }
    else {
        // setSuccess(firstName,'name');
    }


    // Validate Last Name-----
    const lastNameVal = lastName.value.trim();

    if (lastNameVal === '') {
        setAlert('Last Name Cannot be Empty!')
    }
    else if (lastNameVal.length < 3 || lastNameVal.length > 12) {
        setAlert('Last Name Length Should be between 3 to 12 Letters!');
    }
    else if (!isNaN(lastNameVal)) {
        setAlert('Last Name Cannot contain numbers!');
    }
    else if (!isNameValid(lastNameVal)) {
        setAlert('Invalid Last Name');
    }
    else {
        // setSuccess('name');
    }

    // Validate Phone Number!!

    const maxnumber = 10;
    const phoneNoVal = phoneNo.value.trim();
    if (phoneNoVal === '') {
        setAlert('Phone No. Field cannot be Empty')
    }
    else if (isNaN(phoneNoVal)) {
        setAlert('Phone No. should contain Numbers only')
    }
    else if (phoneNoVal.length !== maxnumber) {
        setAlert('Phone No. Should be 10 Digits')
    }
    else if (!contactNoVal(phoneNoVal)) {
        setAlert('Invalid Phone Number')
    }


    // Validate Office Number------
    const officeNoVal = officeNo.value.trim();
    if (officeNoVal === '') {
        setAlert('Office No. Field cannot be Empty')
    }
    else if (isNaN(officeNoVal)) {
        setAlert('Office No. should contain Numbers only')
    }
    else if (officeNoVal.length !== maxnumber) {
        setAlert('Phone No. Should be 10 Digits')
    }
    else if (!contactNoVal(officeNoVal)) {
        setAlert('Invalid Office Number')
    }
    
    // Validate E-mail Id---------

    const emailVal = email.value.trim();
    if (emailVal === '') {
        setAlert('E-mail field cannot be Empty')
    }
    else if (!checkEmail(emailVal)) {
        setAlert('Please Enter a Valid E-mail!!')
    }

    //  Validate Password---------
    const passwordVal = password.value.trim();
    const minPassLength = 5;
    const maxPassLength = 8;
    
    if (passwordVal === '') {
        setAlert('Password Field cannot be Empty');
    }
    else if (passwordVal.length < minPassLength || passwordVal.length > maxPassLength) {
        setAlert('Password Should be between 5 to 8 letters');
    }
    else if (!checkPassword(passwordVal)) {
        setAlert('Invalid Password');
    }

    // Validate Confirm Password--------
    const confPassVal = confPassword.value.trim();
    if (confPassVal === '') {
        setAlert('Conform Password Field cannot be Empty');
    }
    else if (confPassVal !== passwordVal) {
        setAlert('Password Does not Match');
    }

    // Select Gender-----
    const genderMale = document.getElementById('residence1');
    const genderFemale = document.getElementById('residence2');

    if (genderMale.checked) {
        gender = genderMale.value;
        console.log(gender);
    }
    else if (genderFemale.checked) {
        gender = genderFemale.value;
        console.log(gender);
    }
    else {
        setAlert('Please Select Gender');
    }
    

    // Select Intrests------

    if (!(biking.checked || reading.checked || playing.checked)) {
        setAlert('Please Select atleast one Intrest');
    }



}

// Check Name is valid or not---------
function isNameValid(name) {
    return name.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
}

// Contact Number Validity-------
function contactNoVal(contactNo) {
    const phoneRegx = /^[2-9]{2}[0-9]{8}$/;
    return phoneRegx.test(contactNo);
    // return contactNo.match(/^[2-9]{2}[0-9]{8}$/);
}

// Check E-mail Validity-------
function checkEmail(email) {
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
}

function checkPassword(password) {
    const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;
    return passRegx.test(password);
    
}

// Alert function -----------
function setAlert(message) {
    
    alert(message);
} 

// Set Success---------
// function setSuccess(input, value) {
//     const parent = input.parentElement;

//     parent.className = `${value}_field success`;
// }

