import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code for processing the form data goes here
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <>usernames</>{' '}
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <>password</>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
