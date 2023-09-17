import "./TodoElement.css"
import { Component } from "react"



class TodoElement extends Component {
  
  state = {
      del:false
  }

  onDone = () => {
    this.props.doneItem(this.props.id)
  }

  onImportant = () => {
    this.props.importantItem(this.props.id)
  }

  onDelete = () => {
    this.props.deletItem(this.props.id)
    this.setState({del: true})
  }

  pStyle = () => {
    let col = {
      padding: "0",
      fontWeight: (this.props.important && !this.props.done) ? 700 : 100,
      color: this.props.done ? "#919191" : (this.props.important) ? "#d11e1e" : ''  ,
      textDecoration: this.props.done ? "line-through" : "none"
  }


  return col
  }


  render(){
    if(!this.state.del){
      return (<>
      
        <div className="rowDiv">
          <span>
          <p className = "text"onClick={this.onDone} style={this.pStyle()}>{this.props.text}</p>
          </span>
        
               <div className="buttons">
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