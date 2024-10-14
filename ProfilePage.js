// src/ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const ProfilePage = () => {
    const user = {
        profilePicture: 'https://via.placeholder.com/150', // Replace with your image URL
        name: 'Harshavardhan Kakade',
        email: 'Harshk2296@gmail.com',
        bio: 'A software developer with a passion for coding and learning new technologies RaectJs.'
    };

    return (
        <div className="profile-page">
            <ProfilePicture imageUrl={user.profilePicture} />
            <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
        </div>
    );
};

export default ProfilePage;
