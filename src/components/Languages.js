import React, { Component } from "react";
import uniqid from 'uniqid';

class Languages extends Component {
    constructor() {
        super();

        this.state = {
            language: '',
            languages: [
                {
                    id: uniqid(),
                    language: 'english'
                },
                {
                    id: uniqid(),
                    language: 'spanish'
                },
                {
                    id: uniqid(),
                    language: 'italian'
                },
            ],
            edit: false
        }
    }

    handleLangChange = (e) => {
        this.setState({
            language: e.target.value
        })
    }

    onSubmitComp = (e) => {
        e.preventDefault();
        this.setState({
            languages: this.state.languages.concat({
                id: uniqid(),
                language: this.state.language
            }),
            language: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = (key) => {
        const newLanguages = this.state.languages.filter(language => language.id !== key)

        this.setState({
            languages: newLanguages
        })
    }

    render() {
        const {
            language,
            languages,
            edit
        } = this.state;

        return (
            <div id="Languages">
                <h2>Languages</h2>
                <ul>
                    {languages.map(language => {
                        return (
                            <li className="hover:cursor-pointer" key={language.id} onClick={() => this.handleRemove(language.id)}>{language.language}</li>
                        )
                    })}
                </ul>

                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="comp-add" className="edit-form">
                        <label htmlFor="language">Language</label>
                        <input
                            id="language"
                            type="text"
                            value={language}
                            onChange={this.handleLangChange}
                        />

                        <button
                            type="button"
                            onClick={this.onSubmitComp}
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default Languages;