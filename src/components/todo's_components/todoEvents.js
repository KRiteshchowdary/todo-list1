import React,{Component} from "react"
import styled from 'styled-components';



class TodoEvent extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        const Todolabel = styled.label`
            font-size: 24px;
            color:#4d4d4d;
            text-align: left;
            flex-grow: 7;
        `

        const Todolistbutton = styled.button`
            background-color: transparent;
            margin-left: 80%;
            // opacity: 0.0;
            color: black;
            font-size: 24px;
            border: transparent;
            flex-grow: 3;
                
            &:hover{
                opacity: 1;
            }
        `
        const Checkboxinput = styled.input`
            height:40;
            width:40;
            border-radius:20;
            color:#f5f5f5
        `


    return (
        <div className="todoList">
            <Todolabel>
            <input 
                name="completed"
                type="checkbox" 
                checked={this.props.item.TodoItemCompleted[this.props.item.id-2]} 
                onChange={this.props.onChange}
            />{this.props.name}
            </Todolabel>
            <Todolistbutton onClick={this.props.deleteEvent}>X</Todolistbutton>
            <br />
        </div>
    )
    }
}

export default TodoEvent