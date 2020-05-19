import React from 'react';

class TodoList extends React.Component {

    constructor (state) {
        super(state);

        this.state = {
            tasks: [
                {
                    name: 'Task 1',
                    completed: true
                }
            ]
        }

        this.addTask = this.addTask.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    addTask (task) {
        if (task === "") return;

        document.querySelector("#todo-input").value = '';

        return this.setState({
            tasks: [
                ...this.state.tasks, 
                {
                    name: task,
                    completed: false
                }
            ]
        })
    }

    toggleCompleted (index) {
        var tasks = this.state.tasks;
        tasks[index].completed = !tasks[index].completed;

        return this.setState({
            tasks
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    render () {
        var tasks = this.state.tasks.map((task, index) => {
            return <li 
                    style={{cursor: 'pointer'}}
                    className={task.completed ? 'completed' : ''}
                    onClick={() => this.toggleCompleted(index)} key={index}>
                    {task.name}
                </li>;
        });

        return <>
            <ul>
                { tasks }
            </ul>
            <input type="text" placeholder="Add your todo" id="todo-input"/>
            <button onClick={() => this.addTask(document.querySelector("#todo-input").value)}>Add</button>
        </>;
    }
}

export default TodoList;