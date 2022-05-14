const armPostHandler = async (event) => {
  event.preventDefault();

  const armor_name = document.querySelector('input[name="armname"]').value;
  const armor_class = document.querySelector('#charclass').value;
  const armor_rating = document.querySelector('input[name="armrating"]').value;

  const response = await fetch('/api/armors', {
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

  if (response.ok) {
    charPostHandler(event);
  } else {
    alert(response.statusText);
  }

}

// document.querySelector('.save-char').addEventListener('click', armPostHandler);