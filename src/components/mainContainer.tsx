import React, { Component } from 'react';
import { Contacts } from './contacts';
import { About } from './about';
import { FullName } from './fullname';
// import logo from './logo.svg';
import '../App.css';
import ProfilePhoto from './profilePhoto';
import info from '../data/info.json'

// const MainContainer = () => {
//     return (
// <div className="maincontainer">
//     <ProfilePhoto />
// <FullName />
//     <About />
//     <Contacts />
// </div>
//     )
// }

class MainContainer extends Component {
    render() {
        return (
            <div className="maincontainer">
                <ProfilePhoto />
                <FullName name={info.name} />
                <About about={info.about} />
                <Contacts contact={info.contact} />
            </div>
        )
    };
}
export default MainContainer;



