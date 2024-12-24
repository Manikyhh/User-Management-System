// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import '../styles/UserForm.css';

const UserForm = ({ selectedUser, onSubmit }) => {
  // Initialize state based on selectedUser (if provided)
  const [name, setName] = useState(selectedUser ? selectedUser.name : '');
  const [email, setEmail] = useState(selectedUser ? selectedUser.email : '');
  const [errors, setErrors] = useState({});

  // Update the form fields if selectedUser is updated
  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  // Validate the form fields
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = 'Name is required';
    if (!email.trim()) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is not valid';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Create or Update user data object
    const userData = { name, email };
    if (onSubmit) {
      onSubmit(userData); // Call onSubmit function passed from parent
    }

    // Reset form fields after submission
    setName('');
    setEmail('');
  };

  return (
    <div className="user-form pb-5">
      <form onSubmit={handleSubmit}>
        <h2>{selectedUser ? 'Edit User' : 'Create User'}</h2>

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          {selectedUser ? 'Update User' : 'Create User'}
        </button>
      </form>
     
    </div>
  );
};

export default UserForm;
