const inputElement = document.querySelectorAll(".input");
const errorElement = document.getElementById('error');
const submitElement = document.getElementById('submit');

const convertToNum = (num) => +num;
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const timeout = () => {
    setTimeout ( () => {
        errorElement.style.visibility = "hidden";
    }, 5000);
};

submitElement.addEventListener('click', e => {
    
    const username = inputElement[0].value;
    const number = convertToNum(inputElement[1].value);
    const email = isValidEmail(inputElement[2].value);
    const userMessage = inputElement[3].value;

    if (username === "" || username === null) {
        errorElement.style.visibility = "visible"
        errorElement.style.color = "red"
        errorElement.innerHTML = "Please enter a valid name"
        timeout();

    } else if (number === 0 
        || isNaN(number) === true 
        || number.toString().length < 10) {
        errorElement.style.visibility = "visible"
        errorElement.style.color = "red"
        errorElement.innerHTML = "Please enter a valid phone number"
        timeout();
        
    } else if (email === "" || email === false) {
        errorElement.style.visibility = "visible"
        errorElement.style.color = "red"
        errorElement.innerHTML = "Please enter a valid email address"
        timeout();

    } else if (userMessage.length < 10) {
        errorElement.style.visibility = "visible"
        errorElement.style.color = "red"
        errorElement.innerHTML = "Please enter more than 10 characters"
        timeout();
    } else {
        errorElement.style.visibility = "visible"
        errorElement.style.color = "green"
        errorElement.innerHTML = "Message sent :)"
        timeout();
    }
});