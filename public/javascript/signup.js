// create a new user
async function signupFormHandler(event) {
  event.preventDefault();

  // get username from webpage
  const username = document.querySelector('#username-signup').value.trim();
  // get password from webpage
  const password = document.querySelector('#password-signup').value.trim();

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

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);