import React, { Component } from "react";
import ImagePicker from "./ImagePicker";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            address: '',
            phone: '',
            email: '',
            edit: false
        }
    }

    handleAdressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }


    render() {
        const {
            address,
            phone,
            email,
            edit
            
        } = this.state;

        return ( 
            <div id="Info">
                <ImagePicker />
                <div className="address">
                    <h2>Address</h2>
                    <p>{address ? address : '123 Address St City, ST 5555'}</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>{phone ? phone : '555-555-5555'}</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>{email ? email : 'info@website.com'}</p>
                </div>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>

                {edit &&
                    <form id="intro-edit" className="edit-form">
                        <label htmlFor="adress">Adress</label>
                        <input
                            id="adress"
                            type="text"
                            placeholder="123 Adress St City, ST 55555"
                            onChange={this.handleAdressChange}
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            onChange={this.handlePhoneChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            onChange={this.handleEmailChange}
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
        );
    }

}

export default Info;