import { createTodo , createStatus } from "./functions/todo";
import { addTodo, layout } from "./dom/layout";
import { completeTodo, inputFieldCreateTodo } from "./dom/addTodo";
import './styles/normalize.css';
import { add } from "date-fns";


layout();

inputFieldCreateTodo(document.querySelector("input"));
completeTodo(document.querySelector(".circle"));



