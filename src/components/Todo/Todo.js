import "./Todo.css"
import { Component } from "react"
import TodoElement from "./TodoElement"


class Todo extends Component {


  render() {

    const { items } = this.props

    const result = items.reduce((jsx, el, i, arr) => {
      let arg = arr.findIndex((el) => el.id === arr[i].id)
      return (<>
        {jsx}
        <TodoElement
         text={el.text} 
         arg = {arg} 
         importantItem = {this.props.importantItem} 
         id = {arr[i].id} 
         important={el.important} 
         deletItem = {this.props.deletItem} 
         done = {el.done}
         doneItem = {this.props.doneItem}
         edit = {this.props.edit}
         />
        </>
      )
    }, <></>)
   
    

    return (
      <ul className="ul">

        {result}


      </ul>
    );
  }

}

export default Todo
