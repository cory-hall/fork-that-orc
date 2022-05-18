async function deleteCharHandler(event) {

  const deleteBtn = document.getElementsByClassName('delete-btn');

  for (var i = 0; i < deleteBtn.length; i++) {
    if (event.target === deleteBtn[i]) {
      const id = deleteBtn[i].getAttribute('char-no');
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
    }

  }
}

document.body.addEventListener('click', deleteCharHandler);