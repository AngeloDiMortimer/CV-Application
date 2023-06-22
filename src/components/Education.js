import React, { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            education: [
                {
                    id: uniqid(),
                    school: 'Cool University',
                    degree: 'B.S. Web Development',
                    date: 'Aug 2019 - July 2020',
                    location: 'New York City, NY'
                }
            ],
            edit: false
        }
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.value
        })
    }

    handleDegreeChange = e => {
        this.setState({
            degree: e.target.value
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


    onSubmitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location,

            }),
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newEdu = this.state.education.filter(education => education.id !== key)

        this.setState({
            education: newEdu
        })
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("education-btn");
        editBtn.classList.toggle("hidden");
    }

    render() {
        const {
            school,
            degree,
            startDate,
            endDate,
            location,
            education,
            edit
        } = this.state;
        
        return (
            <div id="Education" onMouseEnter={this.toggleBtn}>
                <h2 className="text-3xl font-bold border-solid border-b-2 border-customBlue mt-4 mb-4">Educación</h2>
                {education.map(edu => {
                    return (
                        <div className="flex flex-row justify-between mb-6" key={edu.id} onClick={() => this.handleRemove(edu.id)}>
                            <div>
                                <p className="education-date font-bold">{edu.date}</p>
                                <p className="education-degree">{edu.degree}</p>
                            </div>
                            <div>
                                <p className="education-school font-bold">{edu.school}</p>
                                <p className="education-location">{edu.location}</p>
                            </div>
                        </div>
                    )
                })}
                <button
                    className="edit-toggle hidden w-20 cursor-pointer mt-4 mb-2
                    rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                    transition-all duration-300
                    hover:bg-customBlue hover:text-slate-50"
                    id="education-btn"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="education-add" className="edit-form flex flex-col gap-1 mb-4 border-2 border-customBlue p-2">
                        <label className="font-bold" htmlFor="school">School</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="school"
                            type="text"
                            value={school}
                            onChange={this.handleSchoolChange}
                        />
                        <label className="font-bold" htmlFor="degree">Degree</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="degree"
                            type="text"
                            value={degree}
                            onChange={this.handleDegreeChange}
                        />
                        <label className="font-bold" htmlFor="start-date">Start Date</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="start-date"
                            type="text"
                            value={startDate}
                            placeholder="Month &amp; Year"
                            onChange={this.handleStartDateChange}
                        />
                        <label className="font-bold" htmlFor="end-date">End Date</label>
                        <input
                            className="border-solid border-b-2 border-customBlue bg-transparent
                            text-customBlue placeholder-customBlue focus:outline-none"
                            id="end-date"
                            type="text"
                            value={endDate}
                            placeholder="Month &amp; Year"
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
                            onClick={this.onSubmitEducation}
                        >
                            Add Education
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

export default Education;