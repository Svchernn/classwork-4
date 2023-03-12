import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://640dee5a1a18a5db838390ac.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getUserById = createAsyncThunk(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const addUser = createAsyncThunk(
  'user/add',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/', userData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
