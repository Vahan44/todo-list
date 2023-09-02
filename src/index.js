import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from "./components/Todo"
import Header from "./components/Header"
import Serch from "./components/Search"
import Button from "./components/Button/Button"
import CreatTasc from "./components/CreatTasc"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<div className = "container">
    <Header/>
    <form className='form'>
    <Serch/>
    <Todo/>
    <CreatTasc/>
    </form>
</div>);


