import React, { Component } from "react";
import uniqid from 'uniqid';

class Competences extends Component {
    constructor() {
        super();

        this.state = {
            competence: '',
            competences: [
                {
                    id: uniqid(),
                    competence: 'Illustrator (click to delete)'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool (click to delete)'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 2 (click to delete)'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 3 (click to delete)'
                },

                {
                    id: uniqid(),
                    competence: 'photoshop (click to delete)'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 4 (click to delete)'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 5 (click to delete)'
                }
            ],
            edit: false
        }
    }

    handleCompChange = (e) => {
        this.setState({
            competence: e.target.value
        })
    }

    onSubmitComp = (e) => {
        e.preventDefault();
        this.setState({
            competences: this.state.competences.concat({
                id: uniqid(),
                competence: this.state.competence
            }),
            competence: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = (key) => {
        const newCompetences = this.state.competences.filter(competence => competence.id !== key)

        this.setState({
            competences: newCompetences
        })
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("comp-btn");
        editBtn.classList.toggle("hidden");
    }

    render() {
        const {
            competence,
            competences,
            edit
        } = this.state;

        return (
            <>
            <div id="Competences" onMouseEnter={this.toggleBtn} onMouseLeave={this.toggleBtn}>
                <h2 className="text-3xl font-bold border-solid border-b-2 border-slate-50 mb-4">Competencias</h2>
                <ul className="flex flex-col gap-2">
                    {competences.map(competence => {
                        return (
                            <li className="text-xl hover:cursor-pointer" key={competence.id} onClick={() => this.handleRemove(competence.id)}>{competence.competence}</li>
                        )
                    })}
                </ul>

                <button
                    className="edit-toggle hidden w-20 cursor-pointer mt-4 mb-2
                    rounded-md border-solid border-2 border-white font-semibold
                    transition-all duration-300
                    hover:bg-slate-50 hover:text-customBlue"
                    id="comp-btn"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>
            </div>
            

                {edit &&
                    <form id="comp-add" className="edit-form flex flex-col border-2 border-slate-50 mt-4 p-2">
                        <label className="font-bold" htmlFor="competence">Competence</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="competence"
                            type="text"
                            value={competence}
                            onChange={this.handleCompChange}
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
            </>
        )
    }
}

export default Competences;