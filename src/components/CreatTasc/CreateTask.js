import "./CreateTask.css"
import { Component } from "react"
class CreatTasc extends Component{
state = {
    value: ""
}

inputValue = (event) => {
    this.setState({
        value: event.target.value
    })
}


enterEvent = () => {
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            this.creatItem()
        }
    })
}

creatItem = () => {
    let flag = false
    flag = !(this.state.value.split('').every(ch => {
        return !"qwertyuiopasdfghjklzxcvbnm<>/?".split("").includes(ch.toLowerCase())
    })) ? this.props.addItem(this.state.value) :  false
    return !flag ? this.setState({value:""}) : 0
}
    render(){
        this.enterEvent()
        return (
            <div className="crDiv">
                <input type="text" className="creat" value = {this.state.value} onChange={this.inputValue} placeholder = "Create a new task" ></input>
                <button className = "crButton" onClick = {this.creatItem} ><b className="b">+</b></button>
            </div>
    
        )
    }
    
}


export default CreatTasc