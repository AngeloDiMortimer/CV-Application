import React, { Component } from "react";
import Aside from "./Aside";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
    render() {
        return (
            <div id="Resume">
                <Aside />
                <main>
                    <Intro />
                    <Education />
                    <Experience />
                    <Skills />
                </main>
            </div>
        );
    };
}

export default Resume;