let control = document.querySelector(".control");
let sidebar = document.querySelector("#sidebar");
let favourite = document.querySelectorAll(".star");
let closeButton = document.querySelector(".icon-close");
let userInput = document.querySelector(".user-input");
let sharePopup = document.querySelector(".share-popup");
let openButton = document.querySelector("#new");
let submitButton = document.querySelector(".submitPost");
let shareButton = document.querySelector("#sharePage");
let closeShare = document.querySelector(".closeShare");
let shareIcon = document.querySelectorAll(".icons");
let copyBtn = document.querySelector(".copyBtn");

control.addEventListener("click", () => {
    if(control.classList.value === "control"){
        control.classList.add("active");
    }
    else{
        control.classList.remove("active");
    }

    if(sidebar.classList.value === ""){
        sidebar.classList.add("active");
    }
    else{
        sidebar.classList.remove("active");
    }
});

favourite.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.value === "star"){
            item.classList.add("active");
        }

        else{
            item.classList.remove("active");
        }
    })
});

closeButton.addEventListener("click", () => {
    userInput.classList.remove("open");
});

openButton.addEventListener("click", () => {
    userInput.classList.add("open");
});

submitButton.addEventListener("click", () => {
    userInput.classList.remove("open");
});

shareButton.addEventListener("click", () => {
    sharePopup.classList.add("open");
});

closeShare.addEventListener("click", () => {
    sharePopup.classList.remove("open");
})

shareIcon.forEach(item => {
    item.addEventListener("click", () =>{
        sharePopup.classList.remove("open");
    }); 
});

copyBtn.addEventListener("click", () => {
    sharePopup.classList.remove("open");
})





