

var isEmail = false;
var passwordMatched = false;
var checkboxTicked = false;
var btn = document.getElementById('btn');
var input_email_box = document.getElementById('email');
input_email_box.addEventListener('input', function (event) {
  if (emailValidator(event.target.value)) {
    document.getElementById('e_message').innerHTML = 'Email valid &#10003;'
    isEmail = true;
    finalValidator();
  }
  else{
    isEmail = false;
    document.getElementById('e_message').innerHTML = 'Email Not valid';

    finalValidator();
  }
})

var conf_pwd_box = document.getElementById('pwd_confirm');
conf_pwd_box.addEventListener('input', function (event) {
  var password = document.getElementById('pwd').value;

  console.log(event.target.value)
  if (event.target.value == password) {
    document.getElementById('p_message').innerHTML = 'Password Matched &#10003';
    passwordMatched = true;
    finalValidator();
  }
  else{
    passwordMatched = false;
    document.getElementById('p_message').innerHTML = 'Password Not Matched';
    finalValidator();
  }
})


var emailValidator = function (email) {
  var regex = /^[a-zA-Z0-9]+@(gmail|yahoo|facebook)\.com/;
  if (regex.test(email)) {
    return true;
  }
  else {
    return false;
  }
}

document.getElementById('checkbox').addEventListener('click', function () {
 
  if(document.getElementById('checkbox').checked == true){
    checkboxTicked = true;
    finalValidator();
  }
  else{
    checkboxTicked = false;
    finalValidator();
  }
});


var finalValidator = function(){
  if(isEmail && passwordMatched && checkboxTicked){
    document.getElementById('submitbtn').disabled = false;
    document.getElementById('submitbtn').style.background = 'lightgreen';
  }
  else{
    document.getElementById('submitbtn').disabled = true;
    document.getElementById('submitbtn').style.background = 'none';
  } 
}
peekPwd = function(){
  if(btn.innerHTML === 'peek'){
    btn.innerHTML = 'unpeek';
    pwd.type = 'text';
  }
  else{
    btn.innerHTML = 'peek';
    pwd.type = 'password';
  }
}