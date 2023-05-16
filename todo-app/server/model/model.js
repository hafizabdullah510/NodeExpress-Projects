import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Todo = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "todos",
  }
);
const model = mongoose.model("Todo", Todo);

export default model;
