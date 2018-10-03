function adjustHeight(height){
  $('particles-js-canvas-el').attr('height', `${height}px`);
};

$(function() {

  $("#hamburger").on('click', function(){
    console.log("Clicked")
    $("#nav-list").toggleClass('open');
    $("#hamburger").toggleClass('open');
    $("#email-box").toggle();
  });

  $("#nav-list a").on('click', function(event) {
    $("#nav-list").removeClass('open');
    $("#hamburger").removeClass('open');
    $("#email-box").show();
  });

  $('#project-carousel').flickity({
    // options
    wrapAround: true,
    dragThreshold: 10
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
  adjustHeight();
  $(window).on('resize', adjustHeight);

  console.log($(window).height());
});

// Function used to determine if using touch device to disable hover effects.
// Obtained from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
;(function(){
  var isTouch = false //var to indicate current input type (is touch versus no touch)
  var isTouchTimer
  var curRootClass = '' //var indicating current document root class ("can-touch" or "")

  function addtouchclass(e){
      clearTimeout(isTouchTimer)
      isTouch = true
      if (curRootClass != 'can-touch'){ //add "can-touch' class if it's not already present
          curRootClass = 'can-touch'
          document.documentElement.classList.add(curRootClass)
      }
      isTouchTimer = setTimeout(function(){isTouch = false}, 500) //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
  }

  function removetouchclass(e){
      if (!isTouch && curRootClass == 'can-touch'){ //remove 'can-touch' class if not triggered by a touch event and class is present
          isTouch = false
          curRootClass = ''
          document.documentElement.classList.remove('can-touch')
      }
  }

  document.addEventListener('touchstart', addtouchclass, false) //this event only gets called when input type is touch
  document.addEventListener('mouseover', removetouchclass, false) //this event gets called when input type is everything from touch to mouse/ trackpad
})();
