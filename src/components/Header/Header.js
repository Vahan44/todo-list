import "./header.css"
import { Component } from "react"

class Header extends Component {
    render(){

        // let arr = [2,5,7,15,23,44,69]
        // let n = 44
        // let l = arr.length
        // function rec(i = Math.floor(l / 2)){
        //     debugger
        //     if(arr[i] === n){
        //         return i
        //     }
        //     else if (arr[i] > n){
        //         i -= Math.floor(i/2) 
        //         rec(i)
        //     }
        //     else if(arr[i] < n){
        //         i += Math.floor(i/2)
        //         rec(i)
        //     }
        
        // }
// console.log(rec())
        return (<>
            <h1 className = "title">MY TODO LIST</h1>
            </>
        )
        }
    
}

export default Header