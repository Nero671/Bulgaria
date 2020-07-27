$(document).ready(function() {
    $('.scroll').on('click', function (e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: $('#second, #aria').offset().top - 40
        }, 1000);
    });
});


function show(state) {
  document.getElementById('form').style.display = state;
}
