import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            company: '',
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            desc: '',
            experience: [
                {
                    id: uniqid(),
                    company: 'Web Company',
                    title: 'Senior Web Developer',
                    date: 'Aug 2019 - July 2020',
                    location: 'New York City, NY',
                    
                },
                {
                    id: uniqid(),
                    company: 'Another Web Company',
                    title: 'Junior Web Developer',
                    date: 'Nov 2016 - Aug 2019',
                    location: 'New York City, NY',
                    
                }
            ],
            edit: false
        };
    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleDescChange = e => {
        this.setState({
            desc: e.target.value
        })
    }

    onSubmitExperience = e => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                title: this.state.title,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location,

            }),
            company: '',
            title: '',
            startDate: '',
            endDate: '',
            location: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newExp = this.state.experience.filter(exp => exp.id !== key)

        this.setState({
            experience: newExp
        })
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("exp-btn");
        editBtn.classList.toggle("hidden");
    }


    render() {
        const {
            company,
            title,
            startDate,
            endDate,
            location,
            experience,
            edit
        } = this.state;

        return (
            <div id="Experience" onMouseEnter={this.toggleBtn}>
                <h2 className="text-3xl font-bold border-solid border-b-2 border-customBlue mt-4 mb-4">Experiencia</h2>
                {experience.map(exp => {
                    return(
                        <div className="flex flex-row justify-between mb-4" key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                            <div>
                                <p className="experience-date font-bold">{exp.date}</p>
                                <p className="experience-title">{exp.title}</p>
                            </div>
                            <div>
                                <p className="experience-company font-bold">{exp.company}</p>
                                <p className="experience-location">{exp.location}</p>
                            </div>
                        </div>
                    )
                })}
                <button
                   className="hidden w-20 cursor-pointer mt-4 mb-2
                   rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                   transition-all duration-300
                   hover:bg-customBlue hover:text-slate-50"
                    id="exp-btn"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="experience-add"  className="edit-form flex flex-col gap-1 mb-4 border-2 border-customBlue p-2">
                        <label className="font-bold" htmlFor="company">Company</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="company"
                            type="text"
                            value={company}
                            onChange={this.handleCompanyChange}
                        />
                        <label className="font-bold" htmlFor="title">Title</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="title"
                            type="text"
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <label className="font-bold" htmlFor="start-date">Start Date</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="start-date"
                            type="text"
                            value={startDate}
                            onChange={this.handleStartDateChange}
                        />
                        <label className="font-bold" htmlFor="end-date">End Date</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="end-date"
                            type="text"
                            value={endDate}
                            onChange={this.handleEndDateChange}
                        />
                        <label className="font-bold" htmlFor="location">Location</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="location"
                            type="text"
                            value={location}
                            onChange={this.handleLocationChange}
                        />
                        <button
                            className="edit-toggle w-28 cursor-pointer mt-4 mb-2
                            rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                            transition-all duration-300
                            hover:bg-customBlue hover:text-slate-50"
                            type="button"
                            onClick={this.onSubmitExperience}
                        >
                            Add Experience
                        </button>
                        <button
                            className="edit-toggle w-20 cursor-pointer mt-4 mb-2
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

export default Experience;