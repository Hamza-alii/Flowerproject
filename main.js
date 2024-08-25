

const username= document.querySelector("#name")
const email= document.querySelector("#email")
const password= document.querySelector("#number")
const textArea= document.querySelector("#textarea")
const form= document.querySelector("#form")


const showError =(inpput, message ) =>{
    let parentElement =inpput.parentElement;
    parentElement.classList = 'form-control error';
    const small= parentElement.querySelector("small");
    const  successIcon= parentElement.querySelectorAll("i")[0];
    const  errorIcon= parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'visible'
    successIcon.style.visibility = 'hidden';
    small.innerText = message;

}

const showsuccess =(inpput) =>{
    let parentElement =inpput.parentElement;
    parentElement.classList = 'form-control success';
    const  successIcon= parentElement.querySelectorAll("i")[0];
    const  errorIcon= parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'hidden'
    successIcon.style.visibility = 'visible';

}

const checkEmpty =(elements)=>{

    elements.forEach( (element)=> {
        if(element.value === ''){
            showError(element, 'Input required');
            
        }else{
            showsuccess(element);
        }
    });

}
const checkEmail = (email)=>{
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(reg.test(email.value)){
        showsuccess(email);
    }else{
        showError(email, 'Invalid Email');
    }
}

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    checkEmpty([username,email,password])
    checkEmail(email)
})
