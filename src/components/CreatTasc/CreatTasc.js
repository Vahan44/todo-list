import "./CreatTasc"
import Button from "../Button/Button"

const CreatTasc = () => {
    return (
        <div>
            <input type="text" className="creat"></input>
            <Button color={{color: 'red'}} text = "Search"/>
        </div>

    )
}


export default CreatTasc