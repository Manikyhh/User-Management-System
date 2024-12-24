
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // API endpoint

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Propagate the error
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
