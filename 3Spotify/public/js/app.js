$(document).ready(function(){
  $('.parallax').parallax();
});

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
      dismissible: true;
      closeIcon: true
      $('.close').closeModal();
  });

  $(".learnMore").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutSwap").offset().top
    }, 900);
});

  $("#brandClick").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-footer").offset().top
    }, 900);
});

$(document).ready(function() {
    $('select').material_select();
  });

$(".torequests").click(function() {
    $('html, body').animate({
        scrollTop: $("#swapped").offset().top
    }, 900);
});