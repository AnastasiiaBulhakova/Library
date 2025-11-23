document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {

            const tempSrc = mainImage.src;
            mainImage.src = thumb.src;
            thumb.src = tempSrc;
        });
    });
});