import React from 'react';
import './style/App.css';
import Home from "./components/Home";
import About from "./components/About";
import DataPage from "./components/DataPage";
import Nav from "./components/Nav";
import CompPage from "./components/CompPage";
import Checklist from "./components/Checklist";
import Simple from "./components/Simple";
import Snack from "./components/Snack";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path={"/snack"} component={Snack}/>
                    <Route path={"/simple"} component={Simple}/>
                    <Route path={"/checklist"} component={Checklist}/>
                    <Route path={"/comp"} component={CompPage}/>
                    <Route path={"/dataPage/:id"} component={DataPage}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
