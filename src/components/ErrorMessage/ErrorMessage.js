import "./ErrorMessage.css"
import { Component } from "react"
class ErrorMessage extends Component {
    res = 1 ? <div className="message">{this.props.message}</div> : <></>
    render() {
        return this.res
    }
}

export default ErrorMessage