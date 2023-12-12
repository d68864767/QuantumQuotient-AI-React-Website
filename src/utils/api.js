// api.js

import { isAuthenticated } from './auth';

// Function to fetch quantum AI content from the server
export const fetchQuantumAIContent = async () => {
  try {
    const response = await fetch('/api/quantum-ai-content', {
      headers: {
        Authorization: `Bearer ${isAuthenticated() ? localStorage.getItem('token') : ''}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quantum AI content');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to create new quantum AI content
export const createQuantumAIContent = async (content) => {
  try {
    const response = await fetch('/api/quantum-ai-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${isAuthenticated() ? localStorage.getItem('token') : ''}`,
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      throw new Error('Failed to create quantum AI content');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to update existing quantum AI content
export const updateQuantumAIContent = async (id, content) => {
  try {
    const response = await fetch(`/api/quantum-ai-content/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${isAuthenticated() ? localStorage.getItem('token') : ''}`,
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      throw new Error('Failed to update quantum AI content');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to delete quantum AI content
export const deleteQuantumAIContent = async (id) => {
  try {
    const response = await fetch(`/api/quantum-ai-content/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${isAuthenticated() ? localStorage.getItem('token') : ''}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete quantum AI content');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
