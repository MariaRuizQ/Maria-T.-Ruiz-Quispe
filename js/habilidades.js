$(document).ready(function(){
  $('#section-feature .sf-wrap')
    .hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    })
    .click(function(event) {
        $(this).toggleClass('active');
    });
});
