import React from 'react';
import ReactDOM from 'react-dom/client';
import Todio from "./components/Todo/Todo"
import Header from "./components/Header/Header"
import Serch from "./components/Search/Serch"
import Button from "./components/Button/Button"
import CreatTasc from "./components/CreatTasc/CreateTask.js"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<div className = "container">
    <Header/>
    <CreatTasc/>
    <Todio/>
    <Serch/>
    <Button text = {<p className="searchI">&#128269;</p>}    />
</div>);


