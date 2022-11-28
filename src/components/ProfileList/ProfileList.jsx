import { useSelector} from 'react-redux';
import './StudentList.css';
import ProfileDetail from '../ProfileDetail/ProfileDetail';


function ProfileList(props) {

    const userList = useSelector(store => store.userList);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user => (
                        <ProfileDetail
                            key={user.id} 
                            user={user} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default ProfileList;