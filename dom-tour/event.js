function locationBtn(){
    const location = document.getElementById('location-btn');
    location.innerText = 'I Am From Bangladesh';

}
document.getElementById('age-btn').addEventListener('click', function(){
    const age = document.getElementById('age-h2');
    age.innerText = 'I Am 34 years Old Now'
})

document.getElementById('update-text').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';

})