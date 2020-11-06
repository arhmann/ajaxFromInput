const form = document.getElementById("form");
let btn = document.getElementById("form__btn");
let xhr = new XMLHttpRequest();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    xhr.open('POST', 'https://reqres.in/api/products/3', true)
    xhr.send(new FormData(form));

    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Send AJAX")

            }
        }
    }
    
   form.reset();
});





/*
const form = document.getElementById("form");
let btn = document.getElementById("form__btn");
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
   

    fetch('/article/formdata/post/user', {
        method: 'post',
        body: formData
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    }).catch(function (error){
        console.error(error);
    })
});
*/
