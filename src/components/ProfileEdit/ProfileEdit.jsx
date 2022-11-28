import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserProfileForm() {
    const dispatch = useDispatch();
    const params = useParams();
    console.log('params', params);

    const profile = useSelector(store => store.editProfile);

    useEffect(() => {
        // Edit mode: fetch the student from the server
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_PROFILE',
                payload: params.id
            });
        }
    }, [params.id]);
    // 👆 re-run the fn every time the :id changes


    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_PROFILE',
            payload: profile
        });
    }

    return (
        <>
        <h1>{params.id ? 'Edit' : 'Add'} User: {profile.profile_name}</h1>
        <form onSubmit={onSubmit}>
            <input
                value={profile.profile_name}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_PROFILE',
                    payload: { profile_name: evt.target.value }
                })}
            />

            {/* What we used to do... (local state) */}
            {/* 
            <input
                value={name}
                onChange={evt => setName(evt.target.value)}
            /> 
            */}
        </form>
        </>
    );
}

export default UserProfileForm;