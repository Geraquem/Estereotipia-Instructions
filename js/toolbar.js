$(function () {
    let cuadricula = $('#cuadricula').offset().top,
        competitivo = $('#competitivo').offset().top,
        auna = $('#auna').offset().top,
        identidades = $('#identidades').offset().top;

    window.addEventListener('resize', function () {
        let cuadricula = $('#cuadricula').offset().top,
            competitivo = $('#competitivo').offset().top,
            auna = $('#auna').offset().top,
            identidades = $('#identidades').offset().top;
    });

    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-cuadricula').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: cuadricula - 50
        }, 600);
    });

    $('#enlace-competitivo').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: competitivo - 50
        }, 600);
    });

    $('#enlace-auna').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: auna - 50
        }, 600);
    });

    $('#enlace-identidades').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: identidades - 50
        }, 600);
    });
});