import React,{Component} from "react"


class TodoEvent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id : this.props.item.id
        }
    }

    render(){
    return (
        <div className="todoList">
            <label>
            <input 
                name="completed"
                type="checkbox" 
                checked={this.props.item.TodoItemCompleted[this.state.id-1]} 
                onChange={this.props.onChange}
            />{this.props.name}
            </label>
            <button onClick={this.props.deleteEvent}>X</button>
            {/* <button onClick={this.props.deleteEvent}>X</button> */}

            <br />
        </div>
    )
    }
}

export default TodoEvent