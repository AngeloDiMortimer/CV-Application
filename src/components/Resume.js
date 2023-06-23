import React, { Component } from "react";
import Aside from "./Aside";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
    render() {
        return (
            <div className="flex flex-row w-full h-full" id="Resume">
                <Aside />
                <main className="flex flex-col text-customBlue bg-slate-50 p-8 w-9/12">
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