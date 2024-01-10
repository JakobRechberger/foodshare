import React from 'react';
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
