import { createProject, createTodo } from "./functions/todo";
import { addTodo, layout } from "./dom/layout";
import './styles/normalize.css';


/** 
const project = createProject("Project 1");

const todo = createTodo("Title", "Description", "2021-12-12", "High", "Project 1");
todo.changeDescription("fhasdhfa");
todo.isDone(true)

project.addTodo(todo);



console.log(project.todos[0]);

*/

layout();
addTodo();