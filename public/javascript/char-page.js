const randomName = require('../../utils/name-arrays');

const randomNameHandler = (event) => {

  const nameArea = document.querySelector('input[name="charname"]');

  const name = randomName;

  nameArea.value() = name;
}

document.querySelector('.name-btn').addEventListener('click', randomNameHandler);