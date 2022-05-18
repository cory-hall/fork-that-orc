// async function deleteCharHandler(event) {
//   event.preventDefault();

//   const deleteBtn = document.getElementsByClassName('delete-btn');

//   for (var i = 0; i < deleteBtn.length; i++) {
//     if (event.target === deleteBtn[i]) {
//       const charId = deleteBtn.getAttribute('char-no');
//       const response = await fetch(`/api/posts/${charId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
      
//       if (response.ok) {
//         document.location.replace('/dashboard/');
//       } else {
//         alert(response.statusText);
//       }
//     }

//   }
// }

// document.body.addEventListener('click', deleteCharHandler);