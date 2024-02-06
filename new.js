document.addEventListener('DOMContentLoaded', () => {
    const getServicesButton = document.querySelector('.btn');

    getServicesButton.addEventListener('click', () => {
        changeHeaderColor();
    });

    function changeHeaderColor() {
        const header = document.querySelector('.header');
        header.style.color = 'red'; // Change the color to red (you can modify as needed)
    }
});
