import "./Todo" 
const FirstRow = ({text, important}) => {
  let col = {color: important ? "red" : ''}
  return (
    <li style =  {col}>{text}</li>
  )
}

let componens = [
  {text: 'text1' , important: true},
  {text: 'text2' , important: false}
]
const Todio = () => {
    return (
        <ul>
        <FirstRow text = {componens[0].text} important = {componens[0].important}/>
        <FirstRow text = {componens[1].text} important = {componens[1].important}/>
          </ul>
    );
  }
  
  export default Todio
