import React from "react"
import TodoEvent from "./todoEvents.js"
import Footer from "./footer.js"

class TodoEventAdder extends React.Component {
    constructor(){
        super()
        this.state = {
            id :0,
            TodoItem : "",
            TodoItemCompleted : [],
            TodoItemList : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.addEvent = this.addEvent.bind(this)
        this.eventManager = this.eventManager.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)

    }

    deleteEvent(id){

        this.state.TodoItemCompleted.splice(id,1);
        this.state.TodoItemList.splice(id,1);

        const NewTodoItemCompleted=this.state.TodoItemCompleted;
        const NewTodoItemList=this.state.TodoItemList;

        this.setState(
            prevState => {
            return{
                id :prevState.id,
                TodoItem : prevState.Todoitem,
                TodoItemCompleted : NewTodoItemCompleted,
                TodoItemList : NewTodoItemList
                    }
                })
    }

    eventManager(id){
        const NewTodoItemCompleted = this.state.TodoItemCompleted;
        NewTodoItemCompleted[id] = !this.state.TodoItemCompleted[id];

        this.setState( prevState => {
        return{
            id :prevState.id,
            TodoItem : prevState.Todoitem,
            TodoItemCompleted : NewTodoItemCompleted,
            TodoItemList : prevState.TodoItemList
                }
            })

    }

    handleChange(event){
        const {name,value} = event.target;
        this.setState({[name] : value})
    }

    addEvent(){
        if(this.state.TodoItem !== ""){
            this.setState(prevState => {
                return{
                id : prevState.id+1,
                TodoItemList : prevState.TodoItemList.concat([prevState.TodoItem]),
                TodoItemCompleted : prevState.TodoItemCompleted.concat(false),
                TodoItem : ""
                }
            })

        }else{
            alert("Event must not be empty.")
        }

    }

    render(){
    const ToDo = this.state.TodoItemList.map( (element) => <TodoEvent item = {this.state} name={element} onChange={() => this.eventManager(this.state.TodoItemList.indexOf(element))} deleteEvent={() => this.deleteEvent(this.state.TodoItemList.indexOf(element))} />) 

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
        {ToDo}
        {console.log(this.state)}
        <Footer TodoItemCompleted={this.state.TodoItemCompleted}/>
        </div>

    )
    }
}

export default TodoEventAdder