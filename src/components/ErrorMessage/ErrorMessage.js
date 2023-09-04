import "./ErrorMessage.css"
import { Component } from "react"
class ErrorMessage extends Component {
    render() {
        return (
        <div className="message">{this.props.message}</div>
        )
    }
}

export default ErrorMessage