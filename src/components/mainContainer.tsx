import { Contacts } from './contacts';
import { About } from './about';
import { FullName } from './fullname';
import { TestButton } from './testButton';
import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import ProfilePhoto from './profilePhoto';
import info from '../data/info.json'

const MainContainer = () => {
    return (
        <div className="maincontainer">
            <ProfilePhoto />
            <FullName />
            <About />
            <Contacts />
            <TestButton />
        </div>
    )
}
export default MainContainer;



