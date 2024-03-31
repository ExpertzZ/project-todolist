export {createTodo, createStatus};

function createTodo(title, status = "active"){
    return {
        title,
        status,
        changeTitle: function(title){
            this.title = title;
        },
        changeStatus: function(status){
            this.status = status;
        },
    }
};


function createStatus(title){
    return {
        title,
        todos: [],

        addTodo: function(todo){
            this.todos.push(todo);
        },
    }
}

