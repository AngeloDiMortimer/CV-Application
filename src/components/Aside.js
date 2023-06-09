import React, { Component } from "react";
import Info from './Info';
import Competences from "./Competences";

class Aside extends Component {
    render() {
        return (
            <aside id="Aside">
                <Info />
                <Competences />
                
            </aside>
        ) 
    }
}

export default Aside;