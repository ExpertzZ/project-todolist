export {createTodo, createStatus};

function createTodo(title,description,duedate,priority,status){
    return {
        title,
        description,
        duedate,
        priority,
        status,
        isDone: function(boolean){
            if (boolean){
                this.done = true;
            } else {
                this.done = false;
            }
        },
        changePriority: function(priority){
            this.priority = priority;
        },
        changeDueDate: function(duedate){
            this.duedate = duedate;
        },
        changeDescription: function(description){
            this.description = description;
        },
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

