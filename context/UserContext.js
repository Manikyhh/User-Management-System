
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

// Custom hook to access the user context
export const useUsers = () => useContext(UserContext);

// User Provider to wrap the app and provide user data
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Fetch users (or use static data)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Simulate fetching data from a backend API
        const response = await fetch('http://localhost:5000/api/users'); // Adjust your API URL
        const data = await response.json();
        setUsers(data); // Set the fetched users to the state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
