// log user in
async function loginFormHandler(event) {
  event.preventDefault();

  // get username
  const username = document.querySelector('#username-login').value.trim();
  // get password
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response =  await fetch('/api/users/login', {
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

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);