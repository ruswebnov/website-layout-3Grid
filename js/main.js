$(document).ready(function () {

  $('.mobile__menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  })

});