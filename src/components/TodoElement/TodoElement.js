import "./TodoElement.css"
import { Component } from "react"



class TodoElement extends Component {
   
  state = {
    isDone: false,
    isImportant: this.props.important,
    del:false
  }
  isDone = false
  onDone = () => {
    this.setState({isDone : !this.state.isDone})
  }

  onImportant = () => {
    this.setState({isImportant : !this.state.isImportant})
  }

  pStyle() {
    let col = {
      padding: "0",
      color: this.state.isDone ? "#919191" : this.state.isImportant ? "#d11e1e" : ''  ,
      textDecoration: this.state.isDone ? "line-through" : "none"
  }


  return col
  }


  render(){
    if(!this.state.del){
      return (<>
      
        <div className="rowDiv">
          <span>
          <p onClick={this.onDone} style={this.pStyle()}>{this.props.text}</p>
          </span>
        
               <div className="buttons">
           <button className = "simb1" onClick={this.onDone} >&#10003;</button>
           <button className = "simb2" onClick = {this.onImportant}>&#33;</button>
           <button className = "simb3" onClick = {()=>{this.setState({del: true})}}>&#128465;</button>
          </div> 
             </div>
       </>
        
       )
    }

      return <></>
    
    
    
  }
   
  }

export default TodoElement 