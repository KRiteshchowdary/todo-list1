import React, { Component } from "react"

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="footer">
                <span>{this.props.TodoItemCompleted.length} Total Tasks</span>
                {/* <button onClick = {this.props.all}>All</button> */}
                <button onClick = {this.props.CompletedOnly}>{this.props.TodoItemCompleted.filter((value) => { return value === true; }).length} Completed</button>
                <button onClick = {this.props.NotCompletedOnly}>{this.props.TodoItemCompleted.filter((value) => { return value === false; }).length} Active</button>
            </div>
        )
    }
}

export default Footer