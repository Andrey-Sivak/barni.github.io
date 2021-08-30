'use strict';

const mobileWidth = 767;
let isMobile = checkWidth();

window.addEventListener('resize', () => {
    isMobile = checkWidth();
});

setTimeout(() => {
    if (!document.querySelector('.loader')) {
        return;
    }

    const loader = document.querySelector('.loader');
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 300)
    }
}, 2500);

window.addEventListener('load', function () {

    (function loader() {
        if (!document.querySelector('.loader')) {
            return;
        }

        const loader = document.querySelector('.loader');

        if (loader.classList.contains('active')) {
            loader.classList.remove('active');
        }

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 1500);

    })();

    (function mobMenu() {
        if (!document.querySelector('.mob-menu-btn')) {
            return;
        }

        const btn = document.querySelector('.mob-menu-btn');
        const menu = document.querySelector('.menu__wrap');

        btn.addEventListener('click', function (e) {
            e.preventDefault();

            this.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('no-scrolling');
        });

        if (btn.classList.contains('hide')) {
            btn.classList.remove('hide');
        }
    })();

});

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}