import React, { Component } from 'react';

class Itemtodo extends Component {
    remove=()=>{
        this.props.remove(this.props.id)
    }
    edit=()=>{
        this.props.edit(this.props.content,this.props.id)
    }
    render() {
        return (
            <li>
                <h3>{this.props.content} < i  onClick={()=>this.edit()} class="fas fa-pencil-alt"></i> <i onClick={()=>this.remove()} class="fas fa-trash-alt"></i></h3>
            </li>
        );
    }
}

export default Itemtodo;