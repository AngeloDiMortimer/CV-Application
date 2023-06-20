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

    toggleBtn = () => {
        const editBtn = document.getElementById("lang-btn");
        editBtn.classList.toggle("hidden");
    }

    render() {
        const {
            language,
            languages,
            edit
        } = this.state;

        return (
            <div id="Languages" onMouseEnter={this.toggleBtn}>
                <h2 className="text-3xl font-bold border-solid border-b-2 border-slate-50 mt-4 mb-4">Languages</h2>
                <ul>
                    {languages.map(language => {
                        return (
                            <li className="text-xl hover:cursor-pointer" key={language.id} onClick={() => this.handleRemove(language.id)}>{language.language}</li>
                        )
                    })}
                </ul>

                <button
                    className="edit-toggle hidden w-20 cursor-pointer mt-4 mb-2
                    rounded-md border-solid border-2 border-white font-semibold
                    transition-all duration-300
                    hover:bg-slate-50 hover:text-customBlue"
                    id="lang-btn"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="comp-add" className="edit-form flex flex-col border-2 border-slate-50 mt-4 p-2">
                        <label className="font-bold" htmlFor="language">Language</label>
                        <input
                        className="border-solid border-b-2 border-white bg-transparent
                        text-white placeholder-white focus:outline-none"
                            id="language"
                            type="text"
                            value={language}
                            onChange={this.handleLangChange}
                        />

                        <div className="flex justify-between">
                        <button
                            className="w-24 mt-4 mb-2 cursor-pointer 
                            rounded-md border-solid border-2 border-white font-semibold
                            transition-all duration-300
                            hover:bg-slate-50 hover:text-customBlue"
                            type="button"
                            onClick={this.onSubmitComp}
                        >
                            Add
                        </button>
                        <button
                            className="w-24 mt-4 mb-2 cursor-pointer 
                            rounded-md border-solid border-2 border-white font-semibold
                            transition-all duration-300
                            hover:bg-slate-50 hover:text-customBlue"
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                        </div>
                    </form>
                }
            </div>
        )
    }
}

export default Languages;