import React, { Component } from 'react';
import Itemtodo from './Itemtodo';
import Finished from './Finished';
var capitalize = require('capitalize');
var mang=[];
var  mangedit=[]
var manghoanthanh=[];
class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            list:[],
            finished:[],
            itemadd: "",
            isEdit: "Add",
            itemedit: "",
            message:""
        }
    }
    isChange=(event)=>{
       this.setState({
           itemadd: capitalize( event.target.value),
           itemedit: capitalize(event.target.value)
       })

    }
    showmessage=()=>{
        if(this.state.message==="rong"){
            return(
                <div class="alert alert-danger ">
                <strong>Bạn chưa nhập</strong> Kiểm tra lại đi!!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            )
        }
        else    
        return null
    }
    add=(event)=>{

        if(this.state. isEdit==="Add"){

            if(this.state.itemadd === "")
        {
           this.setState({
               message: "rong"
           })
        }
        else{
            mang.push(this.state.itemadd)
            this.setState({
            list: mang,
            itemadd: "",
            message:""
             })
        }
        }
        else{
            this.editformang()
        }
        this.setState({
            itemedit:"",
            itemadd: ""
        })
      
    }
    remove=(id)=>{
        var mangxoa=[]
        this.state.list.map((value, key) =>{
          if(key !==id ){
            mangxoa.push(value)
          }
          else
            manghoanthanh.push(value)
        })
        mang= mangxoa
        this.setState({
            list: mang,
            finished: manghoanthanh,
            itemedit: ""
        })
        
    }
    removeall=()=>{
        manghoanthanh=[]
        this.setState({
            finished: []
        })
    }
    edit=(content ,id)=>{
        this.setState({
            isEdit: "Save",
            itemedit: content,
            idedit:id
        })
    }
    editformang=()=>{
        mangedit=[]
        mang.map((value,key)=>{
            if(this.state.idedit !== key){
                mangedit.push(value)
            }
            else
                mangedit.push(this.state.itemedit)
        })
        this.setState({
            list : mangedit
        })
        this.setState({
            isEdit:"Add",
        })
    }
    render() {
        return (
            <div>
                <div>
            <div className="form-group">
                <h1> To Do <small>List</small></h1>
                    {this.showmessage()}
                <form >
                <input value={this.state.itemedit} required onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Your Task" name="task" />
                <button  type="reset"  onClick={(event)=>this.add(event)}className="btn btn btn-primary  btn-block">{this.state.isEdit}</button>
                </form>
              
            </div>
            <div />
            </div>
            <div className="container">
            <div className="row">
              <ul className="col-sm-6">
                <h2>Chưa hoàn thành</h2>
                {this.state.list.map((value, key) =>{
                    return(<Itemtodo edit={()=>this.edit(value,key)} content= {value} id={key} remove={()=>this.remove(key)}> </Itemtodo>)
                })}
              </ul>
              <ul  className="col-sm-6"> 
                <h2>Đã hoàn thành <i onClick={()=>this.removeall()} class="fas fa-times" data-toggle="tooltip" title="Xóa all!!!!!"></i></h2>
                {this.state.finished.map((value, key) =>{
                    return(<Finished content= {value} id={key} > </Finished>)
                })}
              </ul>
            </div>
            </div>
            </div>
        );
    }
}
export default Form;
