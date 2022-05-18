const triggers = document.getElementsByClassName('trigger');
const modals = document.getElementsByClassName('modal');
const closeBtn = document.getElementsByClassName('close-button');
const deleteBtn = document.getElementsByClassName('delete-btn');

function setAtt() {
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", () => getAtt);
    triggers[i].setAttribute('button-no', i);
    modals[i].setAttribute('modal-no', i);
  }
}

function getAtt(event) {
  var tar = event.target.getAttribute('button-no');

  for (var i = 0; i < triggers.length; i++) {
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

setAtt();
document.body.addEventListener('click', getAtt);