// create a new user
async function signupFormHandler(event) {
  event.preventDefault();

  // get username from document
  const username = document.querySelector('#username-signup').value.trim();
  // get password from document
  const password = document.querySelector('#password-signup').value.trim();

  // if username and password are truthy
  // call the API POST method at /api/users
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);''