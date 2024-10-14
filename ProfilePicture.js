// src/ProfilePicture.js
import React from 'react';

const ProfilePicture = ({ imageUrl }) => {
    return (
        <div className="profile-picture">
            <img src={imageUrl} alt="Profile" />
        </div>
    );
};

export default ProfilePicture;
