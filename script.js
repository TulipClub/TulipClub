document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".animated-text");
    text.style.opacity = "0";
    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transition = "opacity 2s ease-in-out";
    }, 500);
});
