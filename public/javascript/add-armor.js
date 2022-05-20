// function to add the armor from the document to the database
const armPostHandler = async (event) => {
  event.preventDefault();

  // get info from document
  const armor_name = document.querySelector('input[name="armname"]').value;
  const armor_class = document.querySelector('#charclass').value;
  const armor_rating = document.querySelector('input[name="armrating"]').value;

  // call the API POST method
  const response = await fetch('/api/create', {
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

  if (!response.ok) {
    alert(response.statusText);
  }
}

module.exports = { armPostHandler };