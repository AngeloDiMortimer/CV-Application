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
                    competence: 'Illustrator'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 2'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 3'
                },

                {
                    id: uniqid(),
                    competence: 'photoshop'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 4'
                },
                {
                    id: uniqid(),
                    competence: 'cool tool 5'
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

    render() {
        const {
            competence,
            competences,
            edit
        } = this.state;

        return (
            <div id="Competences">
                <h2>Competences</h2>
                <ul>
                    {competences.map(competence => {
                        return (
                            <li className="hover:cursor-pointer" key={competence.id} onClick={() => this.handleRemove(competence.id)}>{competence.competence}</li>
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
                        <label htmlFor="competence">Competence</label>
                        <input
                            id="competence"
                            type="text"
                            value={competence}
                            onChange={this.handleCompChange}
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

export default Competences;