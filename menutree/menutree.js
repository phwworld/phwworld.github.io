const parentMenu = document.querySelectorAll(".tree .parent span");
parentMenu.forEach( (item, index) => {
    item.addEventListener("click", (event) => {
        let children =  event.target.nextElementSibling;
        children.classList.toggle("open");
    })
});
