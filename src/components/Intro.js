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

    render() {
        const { profile, edit } = this.state;

        return (
            <div id="Intro">
                
                <h2>Profile</h2>
                <p className="profile">{profile ? profile : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>
                
                {edit &&
                    <form id="intro-edit" className="edit-form">
                        
                        <label htmlFor="profile">Profile</label>
                        <textarea
                            id="profile"
                            onChange={this.handleProfileChange}
                        />
                        <button
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