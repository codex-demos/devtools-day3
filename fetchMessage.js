export function fetchSecretMessage(task) {
  return fetch('https://secret-messages-7i4e.onrender.com/api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data.message;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error; // rethrow the error for the caller to handle
    });
}
