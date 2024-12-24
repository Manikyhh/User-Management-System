// src/components/UserList.js
import React, { useState } from 'react';
import { useUsers } from '../context/UserContext'; // Import the context hook
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserList.css';
import UserForm from './UserForm'; // Import UserForm

const UserList = () => {
  const { users, setUsers } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for editing

  // Handle delete user
  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  // Handle edit user
  const handleEdit = (user) => {
    setSelectedUser(user); // Set the selected user for editing
  };

  // Handle form submission (Create or Update user)
  const handleFormSubmit = (userData) => {
    if (selectedUser) {
      // Update existing user (keep the existing ID)
      const updatedUsers = users.map(user =>
        user.id === selectedUser.id ? { ...user, ...userData } : user
      );
      setUsers(updatedUsers);
    } else {
      // Create new user (generate ID based on the current length)
      const newUser = { ...userData, id: users.length + 1 };
       // Generate new ID based on the list length
      setUsers([...users, newUser]);
    }

    // Reset selectedUser after form submission
    setSelectedUser(null);
  };

  return (
    <div className="user-list-container col-md-6 pb-5 pt-5 container">
      <h2 className="pb-3 text-center">User Management System</h2>

      {/* to create a new user */}
      {/* Render the UserForm with selectedUser and onSubmit */}
      <UserForm  onClick={() => setSelectedUser(null)}  selectedUser={selectedUser} onSubmit={handleFormSubmit} />
<div className='text-center mt-5 mb-3'><h5>User Details</h5></div>
      {/* User Table */}
      <table className="table table-bordered table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div className='d-flex' style={{gap:'10px'}}>
                <button onClick={() => handleEdit(user)} className="btn btn-primary">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
