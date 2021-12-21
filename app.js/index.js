const btnScrollToTOp = document.getElementById("btnScrollToTop");

btnScrollToTOp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});