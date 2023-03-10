const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello World!";


// function showMessage(text){

//     text = window.alert("Hello world!");
//     return text;
// }

// showMessage();

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/tomorrowland.png");
        myImage.style.height = '256px';
        myImage.style.width = "256px";
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}
