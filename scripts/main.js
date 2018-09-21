$(function() {

  $("#hamburger").on('click', function(){
    console.log("Clicked")
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
    $("#email-box").toggle();
  });

  $("#nav-list a").on('click', function(event) {
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
    $("#email-box").show();
  });

  $('#project-carousel').flickity({
    // options
    wrapAround: true,
    // groupCells: true
    // cellAlign: 'left',
    // contain: true
  });

  clipboard = new ClipboardJS('#email-button');

  clipboard.on('success', function(e) {
    $('#email-tooltip').attr('tooltip', 'Copied to clipboard!');
    $('#email-tooltip').addClass('success');
    e.clearSelection();
  });

  $('#email-button').mouseleave(function() {
    $('#email-tooltip').attr('tooltip', 'Click to copy to clipboard.');
    $('#email-tooltip').removeClass('success');
  });

  particlesJS.load('particles-js', 'https://api.myjson.com/bins/1c12jw', function() {
    console.log('callback - particles.js config loaded');
  });
});
