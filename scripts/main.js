$(function() {

  $("#hamburger").on('click', function(){
    console.log("Clicked")
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
  });

  $("#nav-list a").on('click', function(event) {
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    };
  });

  $('#project-carousel').flickity({
    // options
    wrapAround: true,
    groupCells: true
    // cellAlign: 'left',
    // contain: true
  });

});

particlesJS.load('particles-js', 'https://api.myjson.com/bins/1c12jw', function() {
  console.log('callback - particles.js config loaded');
});