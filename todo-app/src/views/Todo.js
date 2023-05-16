import React from "react";
import { useState, useEffect, useCallback } from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

import { Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import {
  createTodo,
  getAllTodos,
  getEditTodo,
  setNewTodo,
  delTodo,
} from "../Service/api.js";

const AddBtn = styled(Button)({
  fontWeight: "bold",
  letterSpacing: "0.1rem",
  borderRadius: "40px",
});

const Todo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [todo, setTodo] = useState({ title: "", description: "" });
  const [allTodos, setAllTodos] = useState([]);
  const [iseditTodo, setIsEditTodo] = useState(false);

  const onValueChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo = async () => {
    if (!iseditTodo) {
      if (todo.title && todo.description) {
        await createTodo(todo);
        setTodo({ title: "", description: "" });
      }
    } else {
      await setNewTodo(todo);
      setTodo({ title: "", description: "" });
    }
    setIsEditTodo(false);
  };

  useEffect(() => {
    getTodos();
  }, [allTodos]);

  const getTodos = async () => {
    const { data } = await getAllTodos();
    setAllTodos(data);
  };

  const editTodo = async (id) => {
    const todo = await getEditTodo(id);
    setTodo(todo.data);
    setIsEditTodo(true);
  };

  const deleteTodo = async (id) => {
    await delTodo(id);
  };
  console.log(todo);
  return (
    <div className={darkMode ? "container darkMode" : "container"}>
      {darkMode ? (
        <BsToggleOn
          className="toggle-btn"
          size={24}
          style={{ color: "white" }}
          onClick={() => setDarkMode(!darkMode)}
        />
      ) : (
        <BsToggleOff
          className="toggle-btn"
          size={24}
          style={{ color: "green" }}
          onClick={() => setDarkMode(!darkMode)}
        />
      )}
      <div className="todo-out-cont">
        <div className="todo-cont">
          <Input
            required
            className={darkMode ? "input-dark input" : "input"}
            placeholder="Enter Title..."
            onChange={(e) => onValueChange(e)}
            name="title"
            value={todo.title}
          />
          <textarea
            className={darkMode ? "textArea textArea-dark" : "textArea"}
            placeholder="Enter Description..."
            rows={6}
            onChange={(e) => onValueChange(e)}
            name="description"
            value={todo.description}
          ></textarea>
          <AddBtn
            className="add-todo-btn"
            variant="contained"
            onClick={() => addTodo()}
          >
            {iseditTodo ? "Edit Todo" : "Add Todo"}
          </AddBtn>
        </div>
      </div>
      {allTodos.length > 0 ? (
        <div className="list-cont">
          {allTodos.map((todo) => {
            const { _id, title, description } = todo;
            return (
              <div
                className={darkMode ? "list-item list-dark" : "list-item"}
                key={_id}
              >
                <div className={darkMode ? "icon-cont icon-dark" : "icon-cont"}>
                  <RiCalendarTodoLine size={24} style={{ color: "green" }} />
                </div>
                <div className="title-cont">
                  <h6>Title</h6>
                  <p className={darkMode ? "p-dark" : ""}>{title}</p>
                </div>
                <div className="desc-cont">
                  <h6>Description</h6>
                  <p className={darkMode ? "p-dark" : ""}>{description}</p>
                </div>
                <div className="btn-cont">
                  <div
                    className={darkMode ? "icon-cont icon-dark" : "icon-cont"}
                  >
                    <AiFillEdit
                      size={24}
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => editTodo(_id)}
                    />
                  </div>
                  <div
                    className={darkMode ? "icon-cont icon-dark" : "icon-cont"}
                  >
                    <MdAutoDelete
                      size={24}
                      style={{ color: "darkRed", cursor: "pointer" }}
                      onClick={() => deleteTodo(_id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-todo">No Todo Task Available!</div>
      )}
    </div>
  );
};

export default Todo;
