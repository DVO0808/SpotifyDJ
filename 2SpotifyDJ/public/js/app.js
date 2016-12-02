// $(document).ready(function(){
//   $('.modal').modal({
//     dismissible: true, // Modal can be dismissed by clicking outside of the modal
//     opacity: .5, // Opacity of modal background
//     in_duration: 300, // Transition in duration
//     out_duration: 200, // Transition out duration
//     starting_top: '4%', // Starting top style attribute
//     ending_top: '10%', // Ending top style attribute
//     ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
//       alert("Ready");
//       console.log(modal, trigger);
//     },
//     complete: function() { alert('Closed'); } // Callback for Modal close
//   }
// );

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
