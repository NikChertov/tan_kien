
/* Проверка поддержки webp, добавление класс webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function() {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
export function sliders() {
    new Swiper('.courses__slider',{
        navigation: {
            nextEl: '.courses__button-next',
            prevEl: '.courses__button-prev'
        },
        slidesPerView: 3,
        watchOverflow: true,
    })
    new Swiper('.other-courses__slider', {
        navigation: {
            nextEl: '.other-courses__button-next',
            prevEl: '.other-courses__button-prev'
        },
        slidesPerView: 3,
        watchOverflow: true,
    })
    new Swiper('.learn__slider', {
        navigation: {
            nextEl: '.learn__button-next',
            prevEl: '.learn__button-prev'
        },
        pagination: {
            el: '.learn__pagination',
            clickable: true,
            type: 'fraction',
        }
    });
    new Swiper('.review__slider', {
        navigation: {
            nextEl: '.review__button-next',
            prevEl: '.review__button-prev'
        },
        pagination: {
            el: '.review__pagination',
            clickable: true,
            type: 'fraction',
        },
        simulateTouch: false,
    });
    new Swiper('.desserts__slider', {
        navigation: {
            nextEl: '.desserts__button-next',
            prevEl: '.desserts__button-prev'
        },
        spaceBetween: 30,
        breakpoints: {
            1366: {
                slidesPerView: 4,
            },
            996: {
                slidesPerView: 3,
            },
            727: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                watchOverflow: true,
            }
        }
    });
    new Swiper('.instagram__slider', {
        slidesPerView: 3.5,
        touchRatio: 0.5,
    });
}

export function sub_listFAQ() {
    // const links = document.querySelectorAll('.list-info__link');
    const items = document.querySelectorAll('.list-info__item');
    // for (let i = 0; i < links.length; i++){
    //     links[i].addEventListener('click', function(){
    //         item[i].classList.toggle('active');
    //     })
    // }
    items.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('active');
        })
        document.addEventListener('click', (e)=>{
            const within = e.composedPath().includes(item);
            if(!within){
                item.classList.remove('active');
            }
        })
    })
}
export function form() {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let selectBody= document.querySelectorAll('.select');
    selectHeader.forEach(item => {
        item.addEventListener('click', function(){
            this.parentElement.classList.toggle('active');
        })
    })
    selectItem.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('active');
        })
    })
    selectBody.forEach(item=>{
        document.addEventListener('click', (e)=>{
            const within = e.composedPath().includes(item);
            if(!within){
                item.classList.remove('active');
            }
        })
    })
}