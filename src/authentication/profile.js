import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

const Profile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return(

        <div>
            Hello, {user.email}
        </div>
    )

}

export default Profile;
