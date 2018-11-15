// Modal elements
let modal = document.getElementById('project-modal');
let modalImg = document.getElementById("project-modal-image");
let captionText = document.getElementById("modal-caption");
let span = document.getElementsByClassName("close")[0];
let projectImages = document.getElementsByClassName('project-image');

let openModal = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

for (let image of projectImages) {
  image.onclick = openModal;
}

// // // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

modal.onclick = function() {
  console.log(this);
  modal.style.display= "none";
}