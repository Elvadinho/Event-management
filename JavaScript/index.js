document.addEventListener("DOMContentLoaded", function(){
    let currentpage = window.location.pathname.split("/").pop();
    if (currentpage === "") currentpage = "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === currentpage){
            link.classList.add("active");
        }
    })
});