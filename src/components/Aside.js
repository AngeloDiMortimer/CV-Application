import React, { Component } from "react";
import Info from './Info';
import Competences from "./Competences";
import Languages from "./Languages";

class Aside extends Component {
    render() {
        return (
            <aside id="Aside">
                <Info />
                <Competences />
                <Languages />
            </aside>
        ) 
    }
}

export default Aside;