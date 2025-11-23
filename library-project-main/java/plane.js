const btn = document.getElementById('confirm-btn');
const plane = document.querySelector('.plane');
const nextPage = document.querySelector('.next-page');

btn.addEventListener('click', () => {
    plane.style.opacity = "1";
    plane.style.transform = "translateX(-120vw) scale(2.5) rotate(10deg)";
    nextPage.style.transition = "right 2.5s ease-in-out";
    nextPage.style.right = "0";
    setTimeout(() => {
        window.location.href = "order_complete.html";
    }, 2800);
});