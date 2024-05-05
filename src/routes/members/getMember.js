import React from "react";
import Contact from "../../main-components/memebrCard";
// import AddContact from "./AddContact";
import { Router } from "react-router-dom";

class Contacts extends React.Component {
    state = {
        contacts: [],
        name: "",
        phone: "",
        state: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    componentDidMount() {
        const URL = "https://randomuser.me/api/?results=3";
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    contacts: data.results
                });
            });
    }

    render() {
        let { contacts } = this.state;
        console.log(this.state.contacts);

        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        contact={contact}
                        key={contact.email}
                    />
                ))}
                {/*<AddContact onChange={this.handleChange} onSubmit={this.addContact} />*/}
            </React.Fragment>
        );
    }
}

export default Contacts;
