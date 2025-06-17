let control = document.querySelector(".control");
let sidebar = document.querySelector("#sidebar");

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