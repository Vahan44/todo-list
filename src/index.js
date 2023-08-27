import React from 'react';
import ReactDOM from 'react-dom/client';
import Todio from "./components/Todio"
import Header from "./components/Header"
import Serch from "./components/Serch"


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<div>
    <Header/>
    <Todio/>
    <Serch/>
</div>);


