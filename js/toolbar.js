$(function () {

    function irA(seccion) {
        let alturaNav = $('#nav').outerHeight();

        $('html, body').animate({
            scrollTop: $(seccion).offset().top - alturaNav
        }, 600);
    }

    $('#enlace-inicio').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('#enlace-cuadricula').click(function (e) {
        e.preventDefault();
        irA('#cuadricula');
    });

    $('#enlace-todosauna').click(function (e) {
        e.preventDefault();
        irA('#todosauna');
    });

    $('#enlace-identidades').click(function (e) {
        e.preventDefault();
        irA('#identidades');
    });

    $('#enlace-competitivo').click(function (e) {
        e.preventDefault();
        irA('#competitivo');
    });

    $('#enlace-footer').on('click', function (e) {
        e.preventDefault();
        let footerTop = $('#contacto').offset().top;
        $('html, body').animate({
            scrollTop: footerTop
        }, 600);
    });
});