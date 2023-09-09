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
            { text: "Learn JS", important: true, id: 1 },
            { text: "Drink Coffee", important: false, id: 2 },
            { text: "Learn React", important: false, id: 3 },
            { text: "Learn TypeScript", important: true, id: 4 },
            { text: "Learn Node.js", important: false, id: 5 },
        ],
        noSearch: true
    }

    search = (input, isImp) => {
        if (input === "") {
            this.setState({ noSearch: true })
        }
        else this.setState({ noSearch: false })
        
        let result = this.state.items.filter(element => {
            return element.text.toLowerCase().includes(input.toLowerCase()) && element.important === isImp;
        })
        this.setState({ searchedItems: result })
        console.log(this.state)
    }

    todoArgument = () => {
        return
    }

    addItem = (text) => {
        let newItem = {
            text,
            important: false,
            id: this.state.items[this.state.items.length - 1].id + 1
        }
        this.setState((old) => {
            return { items: [newItem, ...old.items] }
        })
    }


    render() {
        return (
            <div className="container">
                <Btn clas='bt1' />
                <Header />
                <Serch func={this.search} />
                <ErrorMessage message="there is no such task" />
                <ErrorMessage message="there is no such done task" />
                <ErrorMessage message="there is no such important task" />

                <Todo items={this.state.noSearch ? this.state.items : this.state.searchedItems} />
                <CreatTasc addItem={this.addItem} />
            </div>
        )
    }
}

root.render(<App />);


