// function to add the character from the document to the database
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
  const response = await fetch('/api/create', {
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

module.exports = { charPostHandler };