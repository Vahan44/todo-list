import "./Todo.css"
import Buttons from "../buttons/buttons"
const Row = ({ text, important }) => {
  let col = { color: important ? "red" : '' }
  return (
    <p className="row" style={col}>{text}</p>
  )
}

let componens = [
  { text: 'text1', important: true },
  { text: 'text2', important: false }
]
const Todio = () => {
  let style = {
    display: "flex",
    flexDirection: 'row',
    padding: "0"
  }
  return (
    <ul>
      <div style={style}>
        <Row text={componens[0].text} important={componens[0].important} />
        <Buttons />
      </div>

      <div style={style}>
        <Row text={componens[1].text} important={componens[1].important} />
        <Buttons />
      </div>         
       </ul>
  );
}

export default Todio
