import React, { Component } from "react";

class Intro extends Component {
    constructor() {
        super();

        this.state = {
            profile: '',
            edit: false
        };
    }

    handleProfileChange = e => {
        this.setState({
            profile: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("prof-btn");
        editBtn.classList.toggle("hidden");
    }

    render() {
        const { profile, edit } = this.state;

        return (
            <div className="pt-8" id="Intro" onMouseEnter={this.toggleBtn} onMouseLeave={this.toggleBtn}>
                
                <h2 className="text-3xl font-bold border-solid border-b-2 border-customBlue mt-4 mb-4">Perfil</h2>
                <p className="profile">{profile ? profile : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                <button
                    className="edit-toggle hidden w-20 cursor-pointer mt-4 mb-2
                    rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                    transition-all duration-300
                    hover:bg-customBlue hover:text-slate-50"
                    id="prof-btn"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>
                
                {edit &&
                    <form id="intro-edit" className="edit-form edit-form flex flex-col gap-1 mb-4 border-2 border-customBlue p-2">
                        
                        <label className="font-bold" htmlFor="profile">Profile</label>
                        <textarea
                            id="profile"
                            onChange={this.handleProfileChange}
                        />
                        <button
                            className="edit-toggle w-24 cursor-pointer mt-4 mb-2
                            rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                            transition-all duration-300
                            hover:bg-customBlue hover:text-slate-50"
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default Intro;