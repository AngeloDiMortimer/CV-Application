import React, { Component } from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state= {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'Creative thinking'
                },
                {
                    id: uniqid(),
                    skill: 'Communication'
                },
                {
                    id: uniqid(),
                    skill: 'Listening'
                },
                {
                    id: uniqid(),
                    skill: 'Detail-Oriented'
                },
                {
                    id: uniqid(),
                    skill: 'Time Management'
                },
                {
                    id: uniqid(),
                    skill: 'Problem Solving'
                },
                {
                    id: uniqid(),
                    skill: 'Artistic Eye'
                },
                {
                    id: uniqid(),
                    skill: 'Adaptability'
                }
            ],
            edit: false
        }
    }

    handleSkillChange = e => {
        this.setState({
            skill: e.target.value
        })
    }

    onSubmitSkill = e => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newSkills = this.state.skills.filter(skill => skill.id !== key)

        this.setState({
            skills: newSkills
        })
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("skill-btn");
        editBtn.classList.toggle("hidden");
    }

    render() {
        const {
            skill,
            skills,
            edit
        } = this.state;

        return (
            <div id="Skills" onMouseEnter={this.toggleBtn}>
                <h2 className="text-3xl font-bold border-solid border-b-2 border-customBlue mt-4 mb-4">Habilidades</h2>
                <ul className="flex flex-col justify-between mb-4">
                    {skills.map(skill => {
                        return(
                            <li key={skill.id} onClick={() => this.handleRemove(skill.id)}>{skill.skill}</li>
                        )
                    })}
                </ul>

                <button
                    className="hidden w-20 cursor-pointer mt-4 mb-2
                    rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                    transition-all duration-300
                    hover:bg-customBlue hover:text-slate-50"
                    type="button"
                    id="skill-btn"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="skill-add" className="edit-form flex flex-col gap-1 mb-4 border-2 border-customBlue p-2">
                        <label className="font-bold" htmlFor="skill">Habilidad</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="skill"
                            type="text"
                            value={skill}
                            onChange={this.handleSkillChange}
                        />
                        <button
                            className="w-28 cursor-pointer mt-4 mb-2
                            rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                            transition-all duration-300
                            hover:bg-customBlue hover:text-slate-50"
                            type="button"
                            onClick={this.onSubmitSkill}
                        >
                            Add Experience
                        </button>
                        <button
                            className="w-20 cursor-pointer mt-4 mb-2
                            rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                            transition-all duration-300
                            hover:bg-customBlue hover:text-slate-50"
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

export default Skills;