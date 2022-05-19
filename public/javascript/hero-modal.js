// get arrays of all needed elements on the page
const triggers = document.getElementsByClassName('trigger');
const modals = document.getElementsByClassName('modal');
const closeBtn = document.getElementsByClassName('close-button');
const deleteBtn = document.getElementsByClassName('delete-btn');

// function to addEventListener to each modal trigger button,
// and add an attribute to each trigger and modal
// these attributes are used to correlate the modal to the trigger button
function setAtt() {
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", () => getAtt);
    triggers[i].setAttribute('button-no', i);
    modals[i].setAttribute('modal-no', i);
  };
};

// function that loops over each array of elements on the page
function getAtt(event) {
  // get which button was clicked
  var tar = event.target.getAttribute('button-no');

  for (var i = 0; i < triggers.length; i++) {
    // all these conditionals do is relate the button to the modal to either
    // close or open the selected modal
    if (tar === modals[i].getAttribute('modal-no')) {
      modals[i].classList.toggle('show-modal');
    }
    if (event.target === modals[i]) {
      modals[i].classList.toggle('show-modal');
    }
    if (event.target === closeBtn[i]) {
      modals[i].classList.toggle('show-modal');
    }
  }
}

// set the element attributes on file load
setAtt();
// listen to any click on the page
document.body.addEventListener('click', getAtt);