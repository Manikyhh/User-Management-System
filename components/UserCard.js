// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
