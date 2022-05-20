const saveBtn = document.querySelector('.save-char');


// function to add the weapon from the document to the database
const wepPostHandler = async (event) => {
  event.preventDefault();

  // get info from document
  const weapon_name = document.querySelector('input[name="wepname"]').value;
  const weapon_class = document.querySelector('#charclass').value;
  const weapon_rating = document.querySelector('input[name="weprating"]').value;

  // call the API POST method
  const response = await fetch('/api/create/weapon', {
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
    armPostHandler(event)
  } else (
    alert(response.statusText)
  )
};

saveBtn.addEventListener('click', wepPostHandler);
