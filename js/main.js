//Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 100) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden'); 
    menus();
});

window.addEventListener('scroll', function () {
    menus();
});

window.addEventListener('resize', function () {
    if (this.screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

window.addEventListener('click', function (e) {
    if(cerrado == false){
        let span = this.document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
           apertura();
        }
    }
});

abrir.addEventListener('click', function () {
    apertura();
});