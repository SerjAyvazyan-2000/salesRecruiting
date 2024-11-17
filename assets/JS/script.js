
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');

    }


});



$(document).ready(function () {

    $('.cases-description-item').click(function (event) {

        event.stopPropagation();


        $('.cases-description-item').removeClass('active');
        $('.cases-sub-block').slideUp();


        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('.cases-sub-block').stop(true, true).slideDown();
        }
    });


    $(document).click(function () {

        $('.cases-description-item').removeClass('active');
        $('.cases-sub-block').slideUp();
    });
});



document.addEventListener('DOMContentLoaded', function () {

    const infoMoreButtons = document.querySelectorAll('.candidates-info-more');


    infoMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {

            event.stopPropagation();

            const button = this.querySelector('button');

            const parentDescription = this.closest('.candidates-description');
            const parent = this.closest('.candidates-item');


            const subInfo = parentDescription.querySelector('.candidates-sub-info');
            const img = parent.querySelector('.candidates-img img');


            if (subInfo.classList.contains('active')) {
                subInfo.classList.remove('active');
                img.classList.remove('active');
                this.classList.remove('active');
                button.textContent = 'Узнать больше';
            } else {

                document.querySelectorAll('.candidates-sub-info.active').forEach(info => {
                    info.classList.remove('active');
                });

                document.querySelectorAll('.candidates-img img.active').forEach(image => {
                    image.classList.remove('active');
                });

                document.querySelectorAll('.candidates-info-more.active').forEach(buttonContainer => {
                    buttonContainer.classList.remove('active');
                    buttonContainer.querySelector('button').textContent = 'Узнать больше'; // Возвращаем текст всех других кнопок
                });


                subInfo.classList.add('active');
                img.classList.add('active');
                this.classList.add('active');
                button.textContent = 'Свернуть';
            }
        });
    });

    // Обработчик клика по документу, чтобы снять активный класс при клике вне элементов
    document.addEventListener('click', function () {
        // Удаляем класс 'active' у всех элементов .candidates-sub-info, изображений и кнопок
        document.querySelectorAll('.candidates-sub-info.active').forEach(info => {
            info.classList.remove('active');
        });

        document.querySelectorAll('.candidates-img img.active').forEach(image => {
            image.classList.remove('active');
        });

        document.querySelectorAll('.candidates-info-more.active').forEach(button => {
            button.classList.remove('active');
        });
    });
});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')
    const menu = document.querySelector('.menu')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');
        menu.classList.add('moved');


    } else {
        headerTop.classList.remove('moved');
        menu.classList.remove('moved');

    }
});
