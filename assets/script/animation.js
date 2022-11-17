$(document).ready(function () {
    $("#footer, #header, #mainpage").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 3000);
    });
});