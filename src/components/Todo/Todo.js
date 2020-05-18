import React, { Component } from "react";
import uuidv4 from 'uuid/dist/v4';
import List from "./List";
import './Todo.css'

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
            task: '',
            items: []
        }

    }

    componentWillMount() {
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        })
    }

    handleOnChange = (event) => {
        const { target: { value } } = event;
        this.setState({
            task: value
        })
    };

    handleOnSubmit = (event) => {
        // Prevent default to avoid the actual form submit.
        event.preventDefault();

        // Once is submited we should reset the task value and we push
        // the new task  to the items array.
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [...this.state.items,
                        {
                            id: uuidv4(),
                            task: this.state.task,
                            completed: false
                        }]
            })
        }
    };

    markAsCompleted = (id) => {
        // Finding Task by Id
        const  foundTask = this.state.items.find(task => task.id === id);

        foundTask.completed = true;

        this.setState({
            items: [...this.state.items, ...foundTask]
        })
    };

    removeTask = (id) => {
        const filteredTasks = this.state.items.filter(task => task.id !== id);

        this.setState({
            items: [...filteredTasks]
        });
    };


    render = () =>
        <div className="Todo">
            <h1>New Task:   </h1>
            <form onSubmit={this.handleOnSubmit}>
                <input value={this.state.task}
                       onChange={this.handleOnChange}/>
            </form>
            <List items={this.state.items}
                  markAsCompleted={this.markAsCompleted}
                  removeTask={this.removeTask}/>
        </div>

}