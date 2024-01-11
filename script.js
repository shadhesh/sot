const form = document.querySelector('#form');
const email = document.querySelector('#Email');
const number = document.querySelector('#number');
const dob = document.querySelector('#dob');
const address = document.querySelector('#Address');
const state = document.querySelector('#State');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
   const emailVal = email.value.trim();
   const numberVal = number.value.trim();
   const dobVal = dob.value.trim();
   const addressVal = address.value.trim();
   const stateVal = state.value.trim();

   if(emailVal ===''){
     setError(email,"email is requried");
   }
   else{
    setSuccess(email);
   }
   if(numberVal ===''){
    setError(number,"number is requried");
  }
  else{
   setSuccess(email);
  }



}
function setError(element,message){
    const inputGroup =element.paraentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element,message){
    const inputGroup =element.paraentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

