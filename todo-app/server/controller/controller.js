import model from "../model/model.js";

export const createTodo = async (req, res) => {
  const todo = req.body;
  const Todo = new model(todo);

  try {
    await Todo.save();
    res.status(200).json(Todo);
  } catch (err) {
    res.status(400).json({ msg: "Error in adding Todo in Controller" });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const allTodos = await model.find();
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(400).json({ msg: "Error in getting all todos in cont" });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const todo = await model.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ msg: "Error in getting Edit todos in cont" });
  }
};
export const editTodo = async (req, res) => {
  const newTodo = { title: req.body.title, description: req.body.description };
  console.log(newTodo);
  //   const todo = new model(newTodo);
  //   console.log(todo);
  try {
    const nTodo = await model.updateOne({ _id: req.params.id }, newTodo);
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json({ msg: "Error in getting Edit todos in cont" });
  }
};
export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await model.deleteOne({ _id: id });
    res.status(200).json({ msg: `Deleted Todo with id ${id}` });
  } catch (err) {
    res.status(400).json({ msg: "Error in deleting todos in cont" });
  }
};
