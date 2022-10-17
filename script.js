function formValidation() {
let x = document.getElementById('firstN').value;
let text;
if (x==''){
    text= 'Enter your first name.';
}
document.getElementById('validate').innerHTML = text
}