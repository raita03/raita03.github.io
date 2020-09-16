document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);


//To validate the email address
function validateEmail() {
    const email = document.getElementById('email');
    const regularExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    if (!regularExpression.test(email.value)) {
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
    }
  }
  
  //To validate the Phone Number
  function validatePhone() {
    const phone = document.getElementById('phone');
    const regularExpression = /^(?:\+88|88)?(01[3-9]\d{8})$/;
  
    if (!regularExpression.test(phone.value)) {
      phone.classList.add('is-invalid');
    } else {
      phone.classList.remove('is-invalid');
    }
  }
  
  //To validate Postal Code
  function validateZipcode() {
    const zipcode = document.getElementById('zipcode');
    const regularExpression = /^[0-9]{4}?$/;
  
    if (!regularExpression.test(zipcode.value)) {
      zipcode.classList.add('is-invalid');
    } else {
      zipcode.classList.remove('is-invalid');
    }
  }
  
