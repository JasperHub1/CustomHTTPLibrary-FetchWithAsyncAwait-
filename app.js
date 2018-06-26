const easyHttp = new EasyHTTP;

// Get Users
// easyHttp.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Users Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@example.com'
}

// Create User
// easyHttp.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// Update User
// easyHttp.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
easyHttp.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));