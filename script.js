$(window).on("load", function () {

    $(".loader .inner").fadeOut(400, function () {
        $(".loader").fadeOut(650);

    });

})

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", ()=>{
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", ()=>{
    container.classList.remove("change");
});

const colors = ["#c0392b", "#d35400","#e67e22", "#e74c3c", "#95a5a6"];

let i = 0;

Array.from(document.querySelectorAll( ".nav-link")).forEach(item=>{
    item.style.cssText = `background-color: ${colors[i++]}`;
});


Array.from(document.querySelectorAll
    (".navigation-button")).forEach(item=>{
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
    });


