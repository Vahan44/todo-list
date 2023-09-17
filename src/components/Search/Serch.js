import "./Search.css"
import { Component } from "react"
class Serch extends Component {
    state = {
        onImportant: false,
        doneClick: false,
        importantClick: false
    }
    impFilter = () => {
      this.setState((st)=>{
        !st.importantClick ? this.props.iFilter() : this.props.allFilter();
       return {importantClick: !st.importantClick}
    })
    }
    DoneFilter = () => {
        this.setState((st)=>{
         return {doneClick: !st.doneClick}
      })
    }


    
change = (event) => {
    this.props.func(event.target.value)
}
render(){
    return (<div className="main">
    <input className = 'searchBar' onChange = {this.change} type = "text" placeholder = "Type text for serch.."></input>
    <div className="filterDiv">
     <button key = "all" className="all">all</button>
     <button key = "done" className="done" style = {{ fontWeight: this.state.doneClick ? 700 : 100, opacity:this.state.doneClick ? 5 : 0.5}} onClick={this.DoneFilter}>done</button>
     <button key = "important" className="imporant" style = {{ fontWeight: this.state.importantClick ? 700 : 100, opacity:this.state.importantClick ? 5 : 0.5}}onClick={this.impFilter}>important</button>
    </div>
     
         </div>
        )
}


}

export default Serch