$(function() {

  $("#hamburger").click(function(){
    console.log("Clicked")
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
  });

});

particlesJS.load('particles-js', 'https://api.myjson.com/bins/1c12jw', function() {
  console.log('callback - particles.js config loaded');
});