import "./Search.css"
import Button from "../Button/Button"
const Serch = ()=> {
    return (<div className="main">
<input className = 'searchBar'type = "text" placeholder = "Type text for serch.."></input>
<div className="filterDiv">
 <button className="all">all</button>
 <button className="done">done</button>
 <button className="imporant">imporant</button>
</div>
 
     </div>
    )
}

export default Serch