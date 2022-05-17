const wepPostHandler = async (event) => {
  event.preventDefault();

  const weapon_name = document.querySelector('input[name="wepname"]').value;
  const weapon_class = document.querySelector('#charclass').value;
  const weapon_rating = document.querySelector('input[name="weprating"]').value;

  const response = await fetch('/api/weapons', {
    method: 'POST',
    body: JSON.stringify({
      weapon_name,
      weapon_class,
      weapon_rating
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
  } else {
    alert(response.statusText);
  }
};

// document.querySelector('.save-char').addEventListener('click', wepPostHandler);

module.exports = { wepPostHandler };