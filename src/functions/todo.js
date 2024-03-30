export {createTodo, createProject};

function createTodo(title,description,duedate,priority,project){
    return {
        title,
        description,
        duedate,
        priority,
        project,
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
        changeProject: function(project){
            this.project = project;
        },
    }
};


function createProject(title){
    return {
        title,
        todos: [],

        addTodo: function(todo){
            this.todos.push(todo);
        },
    }
}
