import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "./components/Todo"
import Header from "./components/Header"
import Serch from "./components/Search"
import CreatTasc from "./components/CreatTasc"
import ErrorMessage from './components/ErrorMessage';
import Btn from "./components/nail/nail"
import { Component } from 'react';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));








class App extends Component {
    state = {
        items: [
          { text: "Learn JS", important: true, done: false, id: 1 },
          { text: "Drink Coffee", important: false, done: false, id: 2 },
          { text: "Learn React", important: false, done: false, id: 3 },
          { text: "Learn TypeScript", important: true, done: false, id: 4 },
          { text: "Learn Node.js", important: false, done: false, id: 5 },
        ],
        noSearch: true,
        noIFilter: true,
        noDFilter: true,
        searchedItems: [],
        newError: false,
        searchImput: "",
        filter: 'all'
    }


    deletItem = (id) => {
        this.setState(({ items }) => {
          const idx = items.findIndex((el) => el.id === id)
      
          return {
            items: [
              ...items.slice(0, idx),
              ...items.slice(idx + 1)
            ]
          }
        })
      }



    importantItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id)
        
         let newItem = JSON.parse(JSON.stringify(items[idx]))
         newItem.important = !newItem.important
         
            return {
              items: [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
              ],
              searchedItems: [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
              ]
            }
          })
    }


    doneItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id)
        
         let newItem = JSON.parse(JSON.stringify(items[idx]))
         newItem.done = !newItem.done
         
             return {
              items: [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
              ],
              searchedItems: [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
              ]
            }
          })
    }
    search = (input) => {
        if (input === "" && this.state.filter === "all") {
            this.setState({ noSearch: true , searchImput: ""})
        }
        else {this.setState({ noSearch: false })
        
        let result = this.state.items.filter(element => {
            return element.text.toLowerCase().indexOf(input.toLowerCase()) > -1// && this.state.noIFilter ? true : element.important
        })

        let filter = this.onFilter(result, this.state.filter)
        this.setState({ searchedItems: filter , searchImput: input})}
    }


    addItem = (text) => {
       if(text){
        let newItem = {
            text,
            important: false,
            id: this.state.items.at(-1).id + 1
        }
        this.setState({newError: false})
        this.setState((old) => {
            return { items: [...old.items, newItem] }
        })
       }
       this.setState({newError: true})
    }


    quantity = () => {
        let res = this.state.items.reduce((acc, oj) => {
            const {important, done} = oj
            acc.done += done ? 1 : 0
            acc.important += important && !done? 1 : 0
            return acc
        },{done:0, important: 0})
        return res
    }
nothing = () => {}



handleSearch = (items, term) => {
  if (term.trim().length === 0) {
    return items;
  }

  return items.filter((item) => {
    return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
  })
}


onFilter = (items, filterBtn) => {
  switch(filterBtn) {
    case 'all':
      return items;
    case 'done':
      return items.filter((el) => el.done)
    case 'important':
      return items.filter((el) => el.important && !el.done)
    default:
      return items
  }
}

onFilterChange = (filter) => {
  let promise = new Promise((resolve, reject) => {
    resolve(this.setState(() => {
      return {filter}
    }))
  })
  promise.then(() => this.search(this.state.searchImput))
  
}


edit = (id ,changed) => {
  this.setState(({items, searchedItems}) => {
    const idx = items.findIndex((el) => el.id === id)
        
         let newItem = JSON.parse(JSON.stringify(items[idx]))
         newItem.text = changed
    return {
      items: [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1)
      ],
      searchedItems: [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1)
      ]
    }
  })
}

    render = () => {     
      const items = (this.state.noSearch) ? this.state.items : this.state.searchedItems 
      // console.log((this.state.noSearch) ? 'items' : 'searchedItems' )
     // console.log(this.state)
        return (
            <div className="container">
                <Btn clas='bt1' />
                <Header done = {this.quantity().done} important = {this.quantity().important}/>
                <Serch func={this.search} 
                 onFilterChange = {this.onFilterChange}/>
                 
                <Todo
                 items={items}
                 importantItem = {this.importantItem}
                 doneItem = {this.doneItem}
                 deletItem = {this.deletItem} 
                 edit = {this.edit}
                 />
                {() => this.state.newError ? <ErrorMessage/> : null}
                <CreatTasc addItem={this.addItem} />
            </div>
        )
    }
}

root.render(<App />);


