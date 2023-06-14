import React, { Component } from "react";
import Aside from "./Aside";
import Intro from "./Intro";

class Resume extends Component {
    render() {
        return (
            <div id="Resume">
                <Aside />
                <main>
                    <Intro />
                </main>
            </div>
        );
    };
}

export default Resume;