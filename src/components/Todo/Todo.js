import "./Todo.css"
import { Component } from "react"
import TodoElement from "../TodoElement"









class Todo extends Component {


  render() {
    const { tasks } = this.props

    const result = tasks.reduce((jsx, el, i) => {
      return (<>
        {jsx}
        <TodoElement text={el} important={i % 2 === 0 ? true : false} />
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
