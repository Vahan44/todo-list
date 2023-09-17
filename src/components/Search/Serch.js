import "./Search.css"
import { Component } from "react"
class Serch extends Component {
    state = {
        onImportant: false,
        all: true,
        doneClick: false,
        importantClick: false
    }

    
change = (event) => {
    this.props.func(event.target.value)
}

buttonClick = (event) => {
    this.setState((state => {
        switch(event.target.name) {
            case 'all':
              return {all: true, doneClick: false, importantClick: false};
            case 'done':
              return {all: false, doneClick: true, importantClick: false};
            case 'important':
              return {all: false, doneClick: false, importantClick: true};
            default:
              return {}
          }
    }))
    this.props.onFilterChange(event.target.name)
}
render(){
    return (<div className="main">
    <input className = 'searchBar' onChange = {this.change} type = "text" placeholder = "Type text for serch.."></input>
    <div className="filterDiv">
     <button key = "all" name = "all"className={this.state.all ? 'filter' : 'all'} onClick={this.buttonClick} >all</button>
     <button key = "done" name = "done" className={this.state.doneClick ? 'filter' : 'done'} onClick={this.buttonClick} >done</button>
     <button key = "important" name = "important" className={this.state.importantClick ? 'filter' : 'important'} onClick={this.buttonClick} >important</button>
    </div>
     
         </div>
        )
}


}

export default Serch