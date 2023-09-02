import "./Todo.css"
import Buttons from "../buttons/buttons"
const Row = ({ text, important }) => {
  let col = {
     color: important ? "red" : '' ,
     padding: 0
}
  return (<>
   <p style={col}>{text}</p>
    
  </>
   
  )
}

let componens = [
  { text: 'text1', important: true },
  { text: 'text2', important: false }
]
const Todo = () => {
  
  return (
    <ul className="ul">
    
    <div className="rowDiv">
        <Row text={componens[0].text} important={componens[0].important} />
        <span className="buttons">
    <button type='submit'>!</button>
    <button type='submit'>O</button>
    <button type='submit'>Dell</button>
   </span> 
      </div>

    
       </ul>
  );
}

export default Todo
