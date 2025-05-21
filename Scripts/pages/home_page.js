import { AuthButton } from '../components/AuthModal.js';

document.addEventListener('DOMContentLoaded', function () {
    const bodyLeft = document.querySelector(".main_section");

    if (bodyLeft) {
        setTimeout(() => {
            bodyLeft.classList.add('slide-down');
        }, 100);

    }

    const cta_button = document.querySelector(".register_btn");
    const search_button = document.querySelector(".search-btn");

    new AuthButton(cta_button, search_button);

});
