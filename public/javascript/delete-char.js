// function to delete a character
async function deleteCharHandler(event) {

  // capture all the delete buttons on the page
  const deleteBtn = document.getElementsByClassName('delete-btn');

  // loop to determine which button is being clicked
  for (var i = 0; i < deleteBtn.length; i++) {
    if (event.target === deleteBtn[i]) {
      // get character number for delete route
      const id = deleteBtn[i].getAttribute('char-no');
      // call the delete route
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    };
  };
};

document.body.addEventListener('click', deleteCharHandler);