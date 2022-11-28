import { useState } from 'react';

/*
YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
*/

function ProfileForm(props) {
    
    const [user, setUser] = useState({ profileName: '' });

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addUser(user);
        clearUserFields();
    }

    // Clear fields of the form by reseting the user
    const clearUserFields = () => {
        setUser({ profileName: '' });
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setUser({profileName: event.target.value})} 
                    placeholder="GitHub username" 
                    value={user.profileName}
                    />
            <input type="submit" value="Add User" />
        </form>
    );
    
}


export default ProfileForm;