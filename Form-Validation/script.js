const form= document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
//get the values from the inputs

const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(usernameValue==''){
setErrorFor(username, 'Username cannot be blank');       //show error msg and add error class
}
else{
setSuccessFor(username);     //add success class
}

if(emailValue==''){
    setErrorFor(email, 'Email cannot be blank');       //show error msg and add error class
}
else if(!isEmail(emailValue)){
    setErrorFor(email, 'Invalid email');    
}
else{
    setSuccessFor(email);     //add success class
}

if(passwordValue==''){
    setErrorFor(password, 'Password cannot be blank');       //show error msg and add error class
}
else{
setSuccessFor(password);     //add success class
}

if(password2Value==''){
    setErrorFor(password2, 'Password cannot be blank');       //show error msg and add error class
}
else if(passwordValue!==password2Value){
    setErrorFor(password2, 'Password does not match');
}
else{
setSuccessFor(password2);     //add success class
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    // If all fields are valid (you can add a check here)
    const allValid = document.querySelectorAll('.form-control.success').length === 4;
    if (allValid) {
        alert("Form submitted successfully!");
        form.reset(); // Optional: clear the form
        document.querySelectorAll('.form-control').forEach(div => div.className = 'form-control');
    }
});


}

function setErrorFor(input, message){
    const formcontrol= input.parentElement; //.form-control div
    const small= formcontrol.querySelector('small');


    //add error msg inside small
    small.innerText= message;

    //add error class
    formcontrol.className= 'form-control error';
}

function setSuccessFor(input){
    const formcontrol= input.parentElement; //.form-control div
    formcontrol.className= 'form-control success';
}

function isEmail(email) {
    // Simple email regex for basic validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}