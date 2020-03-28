import React from "react"

class TodoEventAdder extends React.Component {
    constructor(){
        super()
        this.state = {
            TodoItem : "",
            completed : false,
            TodoItemList : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addEvent = this.addEvent.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        this.setState({[name] : value})
    }
    addEvent(event){
        this.setState(prevState => {

            const NewTodoItemList = prevState.TodoItemList.concat(prevState.TodoItem);
            const NewCompleted = prevState.completed;

            return({
                TodoItem:"",
                completed: NewCompleted,
                TodoItemList : NewTodoItemList
            })
        })
        console.log(this.state);
    }
    render(){

    return(
        <div className="Add-event">
        <input 
            type="text"
            name = "TodoItem"
            placeholder = "Add event or task"
            value = {this.state.TodoItem} 
            onChange = {this.handleChange}
        /> 
        <button onClick = {this.addEvent}><b>ADD</b></button>
        <h2>{this.state.TodoItemList}</h2>
        </div>

    )
    }
}

export default TodoEventAdder