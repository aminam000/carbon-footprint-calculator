import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function ProfileDetail({user}) {
  return (
    <tr>
      <td>{user.profile_name}</td>
      <td>
        <Link to={`/profile/${user.id}/edit`}>
          🖊️ Edit
        </Link>
      </td>
    </tr>
  );
}

export default ProfileDetail;
