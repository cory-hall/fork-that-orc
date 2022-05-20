// function to add the weapon from the document to the database
const wepPostHandler = async (event) => {
  event.preventDefault();

  // get info from document
  const weapon_name = document.querySelector('input[name="wepname"]').value;
  const weapon_class = document.querySelector('#charclass').value;
  const weapon_rating = document.querySelector('input[name="weprating"]').value;

  // call the API POST method
  const response = await fetch('/api/weapons', {
    method: 'POST',
    body: JSON.stringify({
      weapon_name,
      weapon_class,
      weapon_rating
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    armPostHandler();
  } else {
    alert(response.statusText)
  }
};

const armPostHandler = async (event) => {
  event.preventDefault();

  // get info from document
  const armor_name = document.querySelector('input[name="armname"]').value;
  const armor_class = document.querySelector('#charclass').value;
  const armor_rating = document.querySelector('input[name="armrating"]').value;

  // call the API POST method
  const response = await fetch('/api/weapons', {
    method: 'POST',
    body: JSON.stringify({
      armor_name,
      armor_class,
      armor_rating
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    charPostHandler();
  } else {
    alert(response.statusText);
  }
}

const charPostHandler = async (event) => {
  event.preventDefault();

  // get info from document
  const character_name = document.querySelector('input[name="charname"]').value;
  const character_class = document.querySelector('#charclass').value;
  const health = document.querySelector('input[name="health"]').value;
  const mana = document.querySelector('input[name="mana"]').value;
  const strength = document.querySelector('input[name="str"]').value;
  const dexterity = document.querySelector('input[name="dex"]').value;
  const intelligence = document.querySelector('input[name="int"]').value;

  // call the API POST method
  const response = await fetch('/api/weapons', {
    method: 'POST',
    body: JSON.stringify({
      character_name,
      character_class,
      health,
      mana,
      strength,
      dexterity,
      intelligence
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('ADDED!');
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

module.exports = { wepPostHandler };