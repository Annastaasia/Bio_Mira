/*$(document).ready(function () {
    $("#footer, #header, #mainpage").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1400);
    });
});*/

function scrollToHalf() {

    $('body, html').animate( {
            scrollTop: $('#otzivy').offset().top
        }, 500);
};

/*function scrollToHal(){
    var height = $('body').height();
      $('html, body').animate({
           scrollTop: height
      }, 500);
    };*/


    let btn_home = document.getElementById('btn-home');
    let home = document.getElementById('home');
    let summary = document.getElementById('summary');
    
    function scrollTo(element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }


    btn_home.addEventListener('click', (e) => {
        e.preventDefault()
          scrollTo(summary)
        })
