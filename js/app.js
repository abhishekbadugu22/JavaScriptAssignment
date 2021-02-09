
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
const txtArea = document.getElementById('txtArea');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const setAge = document.getElementById('age');

let gender;


// Add Event Listener-----------

submit.addEventListener('click' , (e) => {
    e.preventDefault();

    if ( validateForm() ) {
        console.log('Form Details Valid');
    }
    else {
        console.log('Form Details Invalid');
    }
});

function validateForm() {


    // Validate First Name-----
    const firstNameVal = firstName.value.trim();

    const minLetter = 3;
    const maxLetter = 12;

    if (firstNameVal === '') {
        //setError(firstName,'name', 'First Name Cannot be Empty!')
        setAlert('First Name Cannot be Empty!');
        return false;
    }
    else if (firstNameVal.length < 3 || firstNameVal.length > 12) {
        
        
        setAlert('First Name Length Should be between 3 to 12 Letters!');
        return false;
    }
    else if (!isNaN(firstNameVal)) {
        setAlert('First Name Cannot contain numbers!');
        return false;
    }
    else if (!isNameValid(firstNameVal)) {
        setAlert('Invalid First Name');
        return false;
    }
    else if ((firstNameVal.split(' ')).length > 1) {
        setAlert('First Name Cannot Have Spaces in between');
        return false;
    }
    // else {
    //      setSuccess(firstName,'name');
    // }


    // Validate Last Name-----
    const lastNameVal = lastName.value.trim();

    if (lastNameVal === '') {
        setAlert('Last Name Cannot be Empty!');
        return false;
    }
    else if (lastNameVal.length < 3 || lastNameVal.length > 12) {
        setAlert('Last Name Length Should be between 3 to 12 Letters!');
        return false;
    }
    else if (!isNaN(lastNameVal)) {
        setAlert('Last Name Cannot contain numbers!');
        return false;
    }
    else if (!isNameValid(lastNameVal)) {
        setAlert('Invalid Last Name');
        return false;
    }
    else if ((lastNameVal.split(' ')).length > 1) {
        setAlert('Last Name Cannot Have Spaces in between');
        return false;
    }
    // else {
    //      setSuccess('name');
    // }

    // Validate Phone Number!!

    const maxnumber = 10;
    const phoneNoVal = phoneNo.value.trim();
    if (phoneNoVal === '') {
        setAlert('Phone No. Field cannot be Empty');
        return false;
    }
    else if (isNaN(phoneNoVal)) {
        setAlert('Phone No. should contain Numbers only');
        return false;
    }
    else if (phoneNoVal.length !== maxnumber) {
        setAlert('Phone No. Should be 10 Digits');
        return false;
    }
    else if (!contactNoVal(phoneNoVal)) {
        setAlert('Invalid Phone Number');
        return false;
    }


    // Validate Office Number------
    const officeNoVal = officeNo.value.trim();
    if (officeNoVal !== '') {
        //setAlert('Office No. Field cannot be Empty')
        if (isNaN(officeNoVal)) {
            setAlert('Office No. should contain Numbers only');
            return false;
        }
        else if (officeNoVal.length !== maxnumber) {
            setAlert('Office No. Should be 10 Digits');
            return false;
        }
        else if (!contactNoVal(officeNoVal)) {
            setAlert('Invalid Office Number');
            return false;
        }
    }
    // else {
            
    // }
    
    // Validate E-mail Id---------

    const emailVal = email.value.trim();
    if (emailVal === '') {
        setAlert('E-mail field cannot be Empty');
        return false;
    }
    else if (!checkEmail(emailVal)) {
        setAlert('Please Enter a Valid E-mail!!');
        return false;
    }

    //  Validate Password---------
    const passwordVal = password.value.trim();
    const minPassLength = 5;
    const maxPassLength = 8;
    
    if (passwordVal === '') {
        setAlert('Password Field cannot be Empty');
        return false;
    }
    else if (passwordVal.length < minPassLength || passwordVal.length > maxPassLength) {
        setAlert('Password Should be between 5 to 8 letters');
        return false;
    }
    else if (!checkPassword(passwordVal)) {
        setAlert('Invalid Password');
        return false;
    }

    // Validate Confirm Password--------
    const confPassVal = confPassword.value.trim();
    if (confPassVal === '') {
        setAlert('Conform Password Field cannot be Empty');
        return false;
    }
    else if (confPassVal !== passwordVal) {
        setAlert('Password Does not Match');
        return false;
    }

    // Select Gender-----
    const genderMale = document.getElementById('residence1');
    const genderFemale = document.getElementById('residence2');

    if (genderMale.checked) {
        gender = genderMale.value;
        //console.log(gender);
    }
    else if (genderFemale.checked) {
        gender = genderFemale.value;
        //console.log(gender);
    }
    else {
        setAlert('Please Select Gender');
        return false;
    }
    

    // Select Intrests------

    if (!(biking.checked || reading.checked || playing.checked)) {
        setAlert('Please Select atleast one Intrest');
        return false;
    }

    // Validate Text area------------

    aboutYouVal = txtArea.value.trim();
    if (aboutYouVal === '') {
        setAlert('About You Field cannot be Empty');
        return false;
    }
    else if ((aboutYouVal.split(' ').length) < 5) {

        //console.log(aboutYouVal.split(' ').length);
        setAlert('Write atleast 5 words in About You Field');
        return false;
    } 

    // Validate Date---------

    if (month.value === 'month') {
        setAlert('Please Select Month');
        return false;
    }
    if (day.value === 'day') {
        setAlert('Please Select Day');
        return false;
    }
    if (year.value === 'year') {
        setAlert('Please select year');
        return false;
    }

    let monthVal = month.value;
    let dayVal = parseInt(day.value);
    let yearVal = parseInt(year.value); 

    // Months With 30 days---------------

    if (monthVal === 'april' || monthVal == 'june' || monthVal == 'sep' || monthVal == 'nov') {
        if (dayVal > 30) {
            setAlert('Invalid Day');
            return false;
        }
    }

    if (monthVal === 'feb') {
        let leapYear = false;

        if ( ( !(yearVal % 4) && yearVal % 100) || !(yearVal % 400) ) {
            leapYear = true;
        }
        
        // if Year is not a Leap year then day should not be greater than 28-----

        if ((leapYear == false) && dayVal >= 29) {
            setAlert('Invalide date');
            return false;
        }

        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            setAlert('Invalide date');
            return false;
        }
    }

    // calculate Age--------

    let monthIndex = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

    //console.log(monthIndex.indexOf(monthVal)+1);
    let crrDate = new Date();
    let birthDate = new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
    //console.log(crrDate);
    //console.log(birthDate);

    let diffInMS = crrDate.valueOf() - birthDate.valueOf();
    //console.log(diffInMS);

    // ( 1000 * 60 * 60 * 24 * 365.25 ) MilliSec Pre Year
    let age = Math.floor(diffInMS / ( 1000 * 60 * 60 * 24 * 365.25 ) );
    //console.log(age);

    // (1000 * 60 * 60 * 24) MilliSec Per Day---
    let days = Math.floor((diffInMS % ( 1000 * 60 * 60 * 24 * 365.25 )) / (1000 * 60 * 60 * 24) ) ;

    //console.log(days);

    let months = Math.floor(days/30) / 100;

    //console.log(months);
    //ageValue = `${age}.${months}`;

    ageValue = age + months;
    //console.log(ageValue);
    
    setAge.value = ageValue;
    //console.log(setAge.value);

    // let displayAge = parseFloat(setAge.value);
    // console.log(displayAge);
    return true;
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
function setSuccess(input, value) {
    const parent = input.parentElement;

    parent.className = `${value}_field success`;
}


// Set Error------
function setError (input, value, message) {
    const errParent = input.parentElement;
    errParent.className = `${value}_field error`;

    alert(message);
}
