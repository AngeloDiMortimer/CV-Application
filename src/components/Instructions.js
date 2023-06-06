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
                    <div id="Instructions">
                        <div className="container">
                            <h2>Instructions</h2>
                            <ul>
                                <li>1. Hover over the areas of the resume to find Edit and Add buttons</li>
                                <li>2. Edit your information in the form fiels and submit your edits</li>
                                <li>3. Add your Education and Experience or click on entries to remove them</li>
                                <li>4. When you're done ediing, use CTRL + P (CMND + P on Mac) to print your resume to pdf</li>
                            </ul>

                            <button
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