const selector = document.querySelector('.contacts__input[type="tel"]');

const im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

new JustValidate('.contacts__form', {

    rules: {
        email: {
            required: true,
            email: true
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

        name: {
            required: true,
            minLength: 2
        },

        company: {
            required: true,
            minLength: 2
        }
    },

    messages: {
        name: {
            minLength: 'Минимально колличество символов - 2',
            required: 'Поле обязательное для заполнения'
        },

        company: {
            minLength: 'Минимально колличество символов - 2',
            required: 'Поле обязательное для заполнения'
        },

        email: {
            email:'Введите корректную почту',
            required: 'Поле обязательное для заполнения'
        },
        
        tel: {
            required: 'Поле обязательное для заполнения',
            function: 'Минимально колличество символов - 11'
        }
    },

});

const test = document.querySelector('.contacts__link')
const container = document.querySelector('.contacts__form')


test.addEventListener('click', () => {
    const text = document.createElement('p')
    text.innerText = 'Нам ушло уведомление! Как только мы его получим, сразу выйдем на связь для уточнения деталей.'
    text.classList.add('contacts__allert-descr')
    container.replaceWith(text);
})


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');
const links = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {

    links.forEach((link) => {
        link.addEventListener('click', () => {
            document.body.classList.remove('stop-scroll')
            menu.classList.remove('header__list--active');
            burger.classList.remove('burger--active')
        });
    });
    burger.classList.toggle('burger--active')
    menu.classList.toggle('header__list--active');
    document.body.classList.toggle('stop-scroll');
})