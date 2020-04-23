import React from "react"
import TodoEvent from "./todoEvents.js"
import Footer from "./footer.js"
import styled from 'styled-components';

// import {Footer} from './styledComponents'
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

    const Footer = styled.div.attrs( props => ({TodoItemCompleted: props.TodoItemCompleted}))`
        margin : Auto;
        width:60%;
        background-color: white;
        padding:20px;
        border-top: 2px solid #e1e1e1;
        color:#4d4d4d;
        display: flex;
        font-size: 14px;
        flex-wrap: nowrap;
        justify-content: space-around;
        box-shadow:
        /* The top layer shadow */
            0 1px 1px rgba(0,0,0,0.15),
                /* The second layer */
            0 10px 0 -5px #eee,
                /* The second layer shadow */
            0 10px 1px -4px rgba(0,0,0,0.15),
                /* The third layer */
            0 20px 0 -10px #eee,
                /* The third layer shadow */
            0 20px 1px -9px rgba(0,0,0,0.15);
    `

const Todo = styled.div`
    width: 62%;
    padding:30px;
    margin :auto;
    background-color: white;
    border-top: 2px solid #e1e1e1;
    padding:10px 10px 15px;
`

const Addbutton = styled.button`
    flex-grow: 1;
    padding : 20px 20px 20px 5px;
    font-family: Roboto;
    font-size: 20px;
    // background-color: white;
    color: #4d4d4d;
    border:1px solid #4d4d4d
`

const Textinput = styled.input`
    flex-grow: 3;
    color: #4d4d4d;
    background-color:white;
    padding : 20px 0px 20px 35px;
    font-size: 24px;
    border: none;
`


const ToDo = this.state.TodoItemList.map( (element) => <TodoEvent item = {this.state} name={element} onChange={() => this.eventManager(this.state.TodoItemList.indexOf(element))} deleteEvent={() => this.deleteEvent(this.state.TodoItemList.indexOf(element))} />) 

    return(
        <div>
        <div className="Add-event">
        <Textinput 
            type="text"
            name = "TodoItem"
            placeholder = "Add event or task"
            value = {this.state.TodoItem} 
            onChange = {this.handleChange}
        /> 
        <Addbutton onClick = {this.addEvent}><b>ADD</b></Addbutton> 
        </div>
        <Todo>
            {ToDo}
        </Todo>
        {/* {ToDo} */}
        {console.log(this.state)}
        <Footer props={this.state.TodoItemCompleted}/>
        </div>

    )
    }
}

export default TodoEventAdder