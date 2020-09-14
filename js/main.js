
$(function () {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false

    });

    $('select').styler();

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    })

});
let tabNav = document.querySelectorAll(".tabs__item")
let tabContent = document.querySelectorAll(".tab")
let tabName = 0

function add() {
    tabNav.forEach(function(item) {
        item.addEventListener("click", selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(function(item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
        tabName = this.getAttribute("data-tab-name");
        selectTabName(tabName)
    }
    function selectTabName(tabName) {
        tabContent.forEach(function(item)  {
            if(item.classList.contains(tabName)) {
                item.classList.add("active")
            } else item.classList.remove("active");
        })
    }
  };
add();

