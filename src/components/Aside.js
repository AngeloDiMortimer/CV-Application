import React, { Component } from "react";
import Info from './Info';
import Competences from "./Competences";
import Languages from "./Languages";

class Aside extends Component {
    render() {
        return (
            <aside className="flex flex-col bg-customBlue text-slate-50 p-8 w-2/3" id="Aside">
                <Info />
                <Competences />
                <Languages />
            </aside>
        ) 
    }
}

export default Aside;