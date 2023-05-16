import axios from "axios";
const URL = "http://localhost:8000";
export const createTodo = async (todo) => {
  try {
    return await axios.post(`${URL}/api/add`, todo);
  } catch (err) {
    console.log("Cannot Add Todo in API", err.message);
  }
};

export const getAllTodos = async () => {
  try {
    return await axios.get(`${URL}/api/all`);
  } catch (err) {
    console.log("Cannot get all Todo in API", err.message);
  }
};
export const getEditTodo = async (id) => {
  try {
    return await axios.get(`${URL}/api/${id}`);
  } catch (err) {
    console.log("Cannot get Edit Todo in API", err.message);
  }
};
export const setNewTodo = async (todo) => {
  try {
    return await axios.put(`${URL}/edit/${todo._id}`, todo);
  } catch (err) {
    console.log("Cannot get Edit Todo in API", err.message);
  }
};

export const delTodo = async (id) => {
  try {
    return await axios.delete(`${URL}/api/${id}`);
  } catch (err) {
    console.log("Cannot delete Todo in API", err.message);
  }
};
