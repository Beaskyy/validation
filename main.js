// const form = document.querySelector('#login-form');
// const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// let username = form.elements.namedItem("username");
// let password = form.elements.namedItem("password");

// username.addEventListener('input', validate);
// password.addEventListener('input', validate);

// form.addEventListener('submit', function (e) {
//  e.preventDefault();
 
//  alert('SUBMITTED');
//  return true;
// });

// function validate (e) {
//  if (e.target.name == "password") {
//   if (pass_reg.test(e.target.value)) {
//    e.target.classList.add('valid');
//    e.target.classList.remove('invalid');
//   } else {
//    e.target.classList.add('invalid');
//    e.target.classList.remove('valid');
//   }
//  }
 
//  if (e.target.name == "username") {
//   if (e.target.value.length > 3) {
//    e.target.classList.add('valid');
//    e.target.classList.remove('invalid');
//   } else {
//    e.target.classList.add('invalid');
//    e.target.classList.remove('valid');
//   }
//  }
// }

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
