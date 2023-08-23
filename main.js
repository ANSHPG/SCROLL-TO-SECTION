let divtrigger = document.querySelector(".clickUpper");
let divresult = document.querySelector(".endResult");

divtrigger.addEventListener("click", function () {
    window.scrollTo({
        top: divresult.getBoundingClientRect().top,
        behavior: 'smooth'
    });
})