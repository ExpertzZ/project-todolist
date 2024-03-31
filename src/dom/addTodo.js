export { inputFieldCreateTodo , completeTodo};
import { addTodo } from "./layout.js"
import { createTodo } from "../functions/todo";


const inputFieldCreateTodo = function (inputField){

    let main = document.querySelector("main");

    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let todo = createTodo(inputField.value);
            console.log(todo);
            addTodo(main, todo);
            inputField.value = ""; 
        }
    });
};

const completeTodo = function (circle){

    circle.addEventListener("click", function () {
        if (todo.status === "active") {
            todo.changeStatus("completed");
            circle.classList.add("completed");
        } else {
            todo.changeStatus("active");
            circle.classList.remove("completed");
        }
    });
};

