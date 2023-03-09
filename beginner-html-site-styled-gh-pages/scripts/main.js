const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello World!";


function showMessage(text){

    text = window.alert("Hello world!");
    return text;
}


showMessage();
