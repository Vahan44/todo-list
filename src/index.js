import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "./components/Todo"
import Header from "./components/Header"
import Serch from "./components/Search"
import CreatTasc from "./components/CreatTasc"
import ErrorMessage from './components/ErrorMessage';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

let tasks = [
    "learn react",
    "learn js",
    "learn sql",
    "learn js"
]

root.render(<div className = "container">
    <Header/>
    <Serch/>
    <ErrorMessage message = "there is no such task"/>
    <ErrorMessage message = "there is no such done task"/>
    <ErrorMessage message = "there is no such important task"/>
    
    <Todo tasks = {tasks}/>
    <CreatTasc/>
</div>);


