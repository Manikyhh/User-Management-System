// src/App.js
import React from 'react';
import { useUsers } from './context/UserContext';
import UserList from './components/UserList';  // Import the UserList component
import UserForm from './components/UserForm';  // Assuming UserForm is used to add new users

const App = () => {
  const { addUser } = useUsers();  // Access context values

  return (
    <div className="App container">
 
      <main>
        {/* <UserForm onSubmit={addUser} />  */}
        {/* Display UserForm for adding new users */}
        <UserList />  {/* Display the UserList */}
      </main>
    </div>
  );
};

export default App;
