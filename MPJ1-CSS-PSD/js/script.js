let currentSlide = $('#carousel-one .carousel-item.active').index();
let totalSlide = $('#carousel-one .carousel-item').length;

$('#slide-next').on('click', function() {
    if (currentSlide + 1 !== totalSlide) {
        toggleSlide();
        currentSlide += 1;
        toggleSlide();
        transformSlide();
    }
});

$('#slide-previous').on('click', function() {
    if (currentSlide + 1 !== 1) {
        toggleSlide();
        currentSlide -= 1;
        toggleSlide();
        transformSlide();
    }
});

function toggleSlide() {
    $($('#carousel-one .carousel-item')[currentSlide]).toggleClass('active');
    $($('#carousel-one .caption')[currentSlide]).toggleClass('active');
}

function transformSlide() {
    $('#carousel-items').css('transform', 'translateX(' + -25*currentSlide + '%)');
}