import React, { Component } from "react";
import ImagePicker from "./ImagePicker";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            address1: '',
            address2: '',
            phone: '',
            email: '',
            website: '',
            linkedin: '',
            edit: false,
            editPhoto: false
        }

    }

    render() {
        const {
            address1,
            address2,
            phone,
            email,
            website,
            linkedin,
            edit,
            editPhoto
        } = this.state;

        return ( 
            <div id="Info">
                <ImagePicker />
            </div>
        );
    }

}

export default Info;