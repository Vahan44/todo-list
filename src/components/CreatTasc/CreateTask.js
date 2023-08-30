import "./CreateTask.css"
import Button from "../Button/Button"

const CreatTasc = () => {
    return (
        <div>
            <input type="text" className="creat"></input>
            <Button className = "crButton"  text = {<b fontSize = '105px'>+</b>
            }/>
        </div>

    )
}


export default CreatTasc