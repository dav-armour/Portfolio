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
    $("#email-box").toggle();
    // if (this.hash !== "") {
    //   event.preventDefault();
    //   var hash = this.hash;
    //   $('html, body').animate({
    //     scrollTop: $(hash).offset().top
    //   }, 800, function(){
    //     window.location.hash = hash;
    //   });
    // };
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
    $('#email-tooltip').attr('tooltip', 'Succesfully copied!');
    $('#email-tooltip').addClass('success');

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

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
