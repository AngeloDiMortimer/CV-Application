import React, { Component } from "react";

class Instructions extends Component {
    constructor() {
        super();

        this.state = {
            instructions: true
        }
    }

    toggleInstrucctions = () => {
        this.setState(prevState => ({
            instructions: !prevState.instructions
        }))
    }

    render() {
        return (
            <div>
                {this.state.instructions && 
                    <div className="flex h-screen justify-center content-center" id="Instructions">
                        <div className="container flex flex-col m-auto items-center w-2/5 p-12
                        bg-cyan-600 text-slate-50 gap-5">
                            <h2 className="text-3xl font-bold underline decoration-slate-50">How this app works</h2>
                            <ul>
                                <li>1. Hover over the areas of the resume to find Edit and Add buttons</li>
                                <li>2. Edit your information in the form fiels and submit your edits</li>
                                <li>3. Add your Education and Experience or click on entries to remove them</li>
                                <li>4. When you're done editing, use CTRL + P (CMND + P on Mac) to print your resume to pdf</li>
                            </ul>

                            <button
                                className="text-xl font-bold border-slate-50 rounded border-2 p-2
                                transition-all hover:bg-slate-50 hover:text-cyan-600"
                                type="button"
                                onClick={this.toggleInstrucctions}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }

}

export default Instructions;