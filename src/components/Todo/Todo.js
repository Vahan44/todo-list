import "./Todo.css"
import { Component } from "react"
import TodoElement from "../TodoElement"









class Todo extends Component {


  render() {
    const { items } = this.props

    const result = items.reduce((jsx, el, i) => {
      return (<>
        {jsx}
        <TodoElement text={el.text} important={el.important} />
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
