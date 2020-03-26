import React from 'react';
import NewGuestForm from "../components/newGuestForm"
import NavigationBar from "../components/navbar"
import "./styles/newGuest.css"
import "../App.css"



const NewGuest = () => {
    return (
        <div className="App">
            <NavigationBar />
            <div className="create-guest-container">
                <br />
                <h2>Enter New Guest Information</h2>
                <br />
                <NewGuestForm />
            </div>
        </div>
    );
}


export default NewGuest;