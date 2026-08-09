document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const overlay = document.querySelector("#overlay");
    const exit = document.getElementById("exit");
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenImg = document.getElementById("fullscreen_img");

    menu.addEventListener("click", () => {
        overlay.classList.add("open");
    });

    exit.addEventListener("click", () => {
        overlay.classList.remove("open");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            overlay.classList.remove("open");
        }
    });

    fullscreenImg.addEventListener("click", (event) => {
        event.stopPropagation();
        fullscreenImg.classList.toggle("zoomed");
        
        if (fullscreenImg.classList.contains("zoomed")) {
            fullscreenImg.style.cursor = "zoom-out";
            fullscreen.scrollTo({
                top: (fullscreenImg.offsetHeight - fullscreen.clientHeight) / 2,
                left: (fullscreenImg.offsetWidth - fullscreen.clientWidth) / 2,
                behavior: "smooth"
            });
        } else {
            fullscreenImg.style.cursor = "zoom-in";
        }
    });
});

function openFullscreen(img) {
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenImg = document.getElementById("fullscreen_img");

    fullscreenImg.src = img.src;
    fullscreenImg.classList.remove("zoomed");
    fullscreenImg.style.cursor = "zoom-in";
    fullscreen.style.display = "flex";
    document.body.classList.add("open");
}

function closeFullscreen(event) {
    if (
        event.target.id === "fullscreen" ||
        event.target.closest("#exit")
    ) {
        const fullscreen = document.getElementById("fullscreen");
        const fullscreenImg = document.getElementById("fullscreen_img");
        fullscreen.style.display = "none";
        fullscreen.style.cursor = "pointer";
        fullscreenImg.classList.remove("zoomed");
        fullscreenImg.style.cursor = "zoom-in";
        document.body.classList.remove("open");
    }
}