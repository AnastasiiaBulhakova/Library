document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".books__slider");
    const GAP = 35;

    sliders.forEach(slider => {
        const track = slider.querySelector(".books__list__slider");
        const btnPrev = slider.querySelector(".btn-prev");
        const btnNext = slider.querySelector(".btn-next");

        if (!track) return;


        function getStep() {
            const card = track.querySelector(".book-card");
            if (!card) return 0;
            return card.offsetWidth + GAP;
        }

        // Загальна функція анімації
        function animateTrack(translateX, callback) {
            track.style.transition = "transform 0.45s ease";
            track.style.transform = `translateX(${translateX}px)`;

            if (callback) {
                track.addEventListener("transitionend", function handler() {
                    track.style.transition = "none";
                    callback();
                    track.removeEventListener("transitionend", handler);
                });
            }
        }

        // Вперед
        function moveNext() {
            const step = getStep();
            if (!step) return;

            animateTrack(-step, () => {
                track.appendChild(track.firstElementChild);
                track.style.transform = "translateX(0)";
            });
        }

        // Назад
        function movePrev() {
            const step = getStep();
            if (!step) return;

            // Перемістити останню картку в початок
            track.insertBefore(track.lastElementChild, track.firstElementChild);

            // Встановити зсув без анімації
            track.style.transition = "none";
            track.style.transform = `translateX(-${step}px)`;

            // Анімація до 0
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    animateTrack(0);
                });
            });
        }

        if (btnNext) btnNext.addEventListener("click", moveNext);
        if (btnPrev) btnPrev.addEventListener("click", movePrev);

    });
});
