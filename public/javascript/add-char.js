const charPostHandler = async (event) => {
  event.preventDefault();

  const character_name = document.querySelector('input[name="charname"]').value;
  const character_class = document.querySelector('#charclass').value;
  const health = document.querySelector('input[name="health"]').value;
  const mana = document.querySelector('input[name="mana"]').value;
  const strength = document.querySelector('input[name="str"]').value;
  const dexterity = document.querySelector('input[name="dex"]').value;
  const intelligence = document.querySelector('input[name="int"]').value;

  const response = await fetch('/api/characters', {
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