import React, { Component } from "react";
import ImagePicker from "./ImagePicker";

import Icon from '@mdi/react';
import { mdiMapMarker, mdiCakeVariant, mdiCellphone, mdiEmail } from '@mdi/js';



class Info extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            title: '',
            address: '',
            birthday: '',
            phone: '',
            email: '',
            edit: false
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        }) 
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        }) 
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

    handleBirthdayChange = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    toggleBtn = () => {
        const editBtn = document.getElementById("id-btn");
        editBtn.classList.toggle("hidden");
    }


    render() {
        const {
            name,
            title,
            address,
            birthday,
            phone,
            email,
            edit
            
        } = this.state;

        return ( 
            <div id="Info">
                <ImagePicker />
                <div className="name text-4xl font-bold mt-3">
                    
                    <p>{name ? name : 'Your Name'}</p>
                </div>
                <div className="title text-xl mb-7">
                    
                    <p>{title ? title : 'Your title'}</p>
                </div>
                
                <div className="contact" onMouseEnter={this.toggleBtn} onMouseLeave={this.toggleBtn}>
                    <h1 className="text-3xl font-bold border-solid border-b-2 border-slate-50 mb-6">Contacto</h1>

                    <div className="address flex flex-row items-center gap-2 mb-4">
                        <Icon path={mdiMapMarker} size={1.3} />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold ">Dirección</h2>
                            <p>{address ? address : '123 Address St City, ST 5555'}</p>
                        </div>
                    </div>

                    <div className="birth flex flex-row items-center gap-2 mb-4">
                        <Icon path={mdiCakeVariant} size={1.3} />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold ">Cumpleaños</h2>
                            <p>{birthday ? birthday : '00-00-0000'}</p>
                        </div>
                    </div>

                    <div className="phone flex flex-row items-center gap-2 mb-4">
                        <Icon path={mdiCellphone} size={1.3} />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold ">Telefono</h2>
                            <p>{phone ? phone : '555-555-555'}</p>
                        </div>
                    </div>
                    <div className="email flex flex-row items-center gap-2 mb-4">
                        <Icon path={mdiEmail} size={1.3} />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold ">Email</h2>
                            <p>{email ? email : 'info@website.com'}</p>
                        </div>
                    </div>

                    <button
                    id="id-btn"
                    className="edit-toggle hidden w-20 mb-2 cursor-pointer 
                    rounded-md border-solid border-2 border-white font-semibold
                    transition-all duration-300
                    hover:bg-slate-50 hover:text-customBlue"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>

                </div>



                {edit &&
                    <form id="intro-edit" className="edit-form flex flex-col gap-1 mb-4 border-2 border-slate-50 p-2">
                        <label className="font-bold" htmlFor="name">Name</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            onChange={this.handleNameChange}
                        />

                        <label className="font-bold" htmlFor="title">Title</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="title"
                            type="text"
                            placeholder="Your Title"
                            onChange={this.handleTitleChange}
                        />

                        <label className="font-bold" htmlFor="adress">Adress</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="adress"
                            type="text"
                            placeholder="123 Adress St City, ST 55555"
                            onChange={this.handleAdressChange}
                        />

                        <label className="font-bold" htmlFor="bd">Birthday</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="bd"
                            type="text"
                            placeholder="xx-xx-xxxx"
                            onChange={this.handleBirthdayChange}
                        />

                        <label className="font-bold" htmlFor="phone">Phone</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="phone"
                            type="text"
                            placeholder="555-555-555"
                            onChange={this.handlePhoneChange}
                        />
                        <label className="font-bold" htmlFor="email">Email</label>
                        <input
                            className="border-solid border-b-2 border-white bg-transparent
                            text-white placeholder-white focus:outline-none"
                            id="email"
                            type="text"
                            placeholder="coolemail@something.com"
                            onChange={this.handleEmailChange}
                        />

                        
                        <button
                            className="edit-toggle w-24 mt-4 mb-2 cursor-pointer 
                            rounded-md border-solid border-2 border-white font-semibold
                            transition-all duration-300
                            hover:bg-slate-50 hover:text-customBlue"
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close edit
                        </button>
                    </form>
                
                }

            </div>
        );
    }

}

export default Info;