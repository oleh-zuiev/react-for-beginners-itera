import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import profPhoto from '../images/1.jpg';
const text = 'some text';
const ProfilePhoto = () => {
    return (
        <div className="photoContainer">
            <img src={profPhoto} alt={text} />
        </div>
    )
}
export default ProfilePhoto;