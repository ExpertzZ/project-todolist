import { add } from 'date-fns';
import '../styles/layout.css'

export  { layout, addTodo};

const layout = function () {
    const page = document.querySelector(".page");

    const header = document.createElement("header");
    page.appendChild(header);

    const title = document.createElement("h1");
    title.textContent = "T O D O";
    header.appendChild(title);

    const main = document.createElement("main");
    header.appendChild(main);


    // input ist in create todo
    const createTodo = document.createElement("div");
    createTodo.classList.add("create-todo");
    main.appendChild(createTodo);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Create a button...";
    createTodo.appendChild(input);

    const circle = document.createElement("div");
    circle.classList.add("circle");
    createTodo.insertBefore(circle, input);


    //summary
    const summary = document.createElement("div");
    summary.classList.add("summary");
    main.appendChild(summary);

    const itemCount = document.createElement("div"); // Fix: Change ".text" to "div"
    itemCount.textContent = "0 items";
    summary.appendChild(itemCount);

    const selectStatus = document.createElement("select"); // Fix: Change ".select" to "select"
    summary.appendChild(selectStatus);

    const all = document.createElement("option");
    all.textContent = "All";
    selectStatus.appendChild(all);

    const active = document.createElement("option");
    active.textContent = "Active";
    selectStatus.appendChild(active);

    const completed = document.createElement("option");
    completed.textContent = "Completed";
    selectStatus.appendChild(completed);

    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Completed";
    summary.appendChild(clearButton);

    addTodo(main, {title: "Train Legs ^^"});
    

}
    
const addTodo = function (main, todoObject) {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const circle = document.createElement("div");
    circle.classList.add("circle");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = todoObject.title;

    todo.appendChild(circle);
    todo.appendChild(title);
    
    const summary = main.querySelector('.summary');
    main.insertBefore(todo, summary);

    

}