async function newWeaponHandler(event) {
  event.preventDefault();

  // get weapon name from webpage
  const weapon_name = document.querySelector('input[name="weapon-name"]').value;
  // get weapon class from webpage
  const weapon_class = document.querySelector('input[name="weapon-class"]').value;
  // get weapon rating from webpage
  const weapon_rating = document.querySelector('input[name="weapon_rating"]').value;

  if (weapon_name && weapon_class && weapon_rating) {
    const response = await fetch('/api/weapons', {
      method: 'POST',
      body: JSON.stringify({
        weapon_name,
        weapon_class,
        weapon_rating
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      document.location.replace('/armor-create');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.add-weapon-btn').addEventListener('click', newWeaponHandler);