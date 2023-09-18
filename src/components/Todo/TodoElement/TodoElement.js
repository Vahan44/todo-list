import "./TodoElement.css"
import { Component } from "react"
import { AiFillEdit, AiFillCheckCircle} from 'react-icons/ai';

class TodoElement extends Component {
  state = {
      del:false,
      edit: false,
      value: ""
  }

  onDone = () => {
    this.props.doneItem(this.props.id)
  }

  onImportant = () => {
    this.props.importantItem(this.props.id)
    console.log(this.state)
  }

  onDelete = () => {
    this.props.deletItem(this.props.id)
    this.setState({del: true})
  }

  onEdit = () => {
    let promise = new Promise((resolve) => {
       resolve(
        this.setState(({value, edit}) => {

        return {value: value === "" ? this.props.text : value, edit: !edit}
      }))
    })
   promise.then(() => {
    this.props.edit(this.props.id, this.state.value)
   })

    
  }


  change = (event) => {
this.setState({value: event.target.value})
  }
  pStyle = () => {
    let col = {
      padding: 0,
      fontWeight: (this.props.important && !this.props.done) ? 700 : 100,
      color: this.props.done ? "#919191" : (this.props.important) ? "#d11e1e" : ''  ,
      textDecoration: this.props.done ? "line-through" : "none"
  }


  return col
  }


  render(){
    if(!this.state.del){
     // this.setState({value: this.state.text})

      return (<>
      
        <div className="rowDiv">
          {!this.state.edit ? 
          <span>
          <p className = "text"onClick={this.onDone} style={this.pStyle()}>{this.props.text}</p>
          </span> : 
          <input className = "editText" onChange = {this.change} value = {this.state.value}></input>
        }
          
        
               <div className="buttons">
               {!this.state.edit ? 
           <button className = "simb4" onClick={this.onEdit} ><AiFillEdit /></button> : 
           <button className = "simb4" onClick={this.onEdit} ><AiFillCheckCircle/></button>}
           <button className = "simb1" onClick={this.onDone} >&#10003;</button>
           <button className = "simb2" onClick = {this.onImportant}>&#33;</button>
           <button className = "simb3" onClick = {this.onDelete}>&#128465;</button>
          </div> 
             </div>
       </>
        
       )
    }

      return <></>
    
    
    
  }
   
  }

export default TodoElement 