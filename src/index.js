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
        searchedItems: [],
        newError: false,
        searchImput: ""
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
         newItem.isDone = !newItem.isDone
         
            return {
              items: [
                ...items.slice(0, idx),
                newItem,
                ...items.slice(idx + 1)
              ]
            }
          })
    }
    search = (input) => {
        if (input === "") {
            this.setState({ noSearch: true })
        }
        else {this.setState({ noSearch: false })
        
        let result = this.state.items.filter(element => {
            return element.text.toLowerCase().indexOf(input.toLowerCase()) > -1// && this.state.noIFilter ? true : element.important
        })
        this.setState({ searchedItems: result , searchImput: input})}
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
            const {important, isDone} = oj
            acc.done += isDone ? 1 : 0
            acc.important += important && !isDone? 1 : 0
            return acc
        },{done:0, important: 0})
        return res
    }
nothing = () => {}
iFilter = () => {
  this.setState((state) => {
    let serched = state.searchedItems
    if(serched.length === 0){
       serched = state.items.filter(el => true)
    }
    const filtered = serched.filter (oj => {
      return oj.important ;
    })
    return {searchedItems: filtered, noIFilter: false}
  })
  !this.state.noSearch ? this.search(this.state.searchImput) : this.nothing()

}

allFilter = () => {
  this.setState({noIFilter: true})
  !this.state.noSearch ? this.search(this.state.searchImput) : this.nothing()
}





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
  this.setState({ filter })
}

    render() {     
      const items = (this.state.noIFilter && this.state.noSearch) ? this.state.items : this.state.searchedItems 

      console.log((this.state.noIFilter && this.state.noSearch) ? 'items' : 'searchedItems' )
        return (
            <div className="container">
                <Btn clas='bt1' />
                <Header done = {this.quantity().done} important = {this.quantity().important}/>
                <Serch func={this.search} 
                 iFilter = {this.iFilter}
                 allFilter = {this.allFilter}/>
                <Todo
                 items={items}
                 importantItem = {this.importantItem}
                 doneItem = {this.doneItem}
                 deletItem = {this.deletItem} 
                 />
                {() => this.state.newError ? <ErrorMessage/> : null}
                <CreatTasc addItem={this.addItem} />
            </div>
        )
    }
}

root.render(<App />);


