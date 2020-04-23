import React, { Component } from "react"
import styled from 'styled-components';


class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
    const Footerspan = styled.span`
        width : 30%;
        margin-left:10px;
        font-family: Roboto;
        padding:10px;
        text-align: left;
      `
      
    const Footerbutton = styled.button`
        margin-left:10px;
        background-color: transparent;
        font-family: Roboto;
        padding:10px;
        border:none

        &:hover{
             border-color: rgb(175,47,47,0.2)
        }
      `
        return(
            <div className="footer">
                <span>{this.props.TodoItemCompleted.length} Total Tasks</span>
                <Footerbutton onClick = {this.props.all}>All</Footerbutton>
                <Footerbutton onClick = {this.props.CompletedOnly}>{this.props.TodoItemCompleted.filter((value) => { return value === true; }).length} Completed</Footerbutton>
                <Footerbutton onClick = {this.props.NotCompletedOnly}>{this.props.TodoItemCompleted.filter((value) => { return value === false; }).length} Active</Footerbutton>
            </div>
        )
    }
}

export default Footer