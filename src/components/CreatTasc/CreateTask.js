import "./CreateTask.css"
import Button from "../Button"

const CreatTasc = () => {
    return (
        <div className="crDiv">
            <input type="text" className="creat" placeholder = "Create a new task"></input>
            <Button className = "crButton"  text = {<b className="b">+</b>
            }/>
        </div>

    )
}


export default CreatTasc