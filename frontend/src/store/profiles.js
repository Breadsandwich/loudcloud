import { csrfFetch } from './csrf';

const LOAD_PROFILE = 'profile/loadProfile';
const EDIT_PROFILE = 'profile/editProfile';

const loadProfile = profile => {
    return {
        type: LOAD_PROFILE,
        profile
    }
}

const updateProfile = profile => {
    return {
        type: EDIT_PROFILE,
        profile
    }
}

//load profile thunk
export const getProfile = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/profiles/${id}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadProfile(data))
        return data
    }
}



//profile reducer

const profileReducer = (state = {} , action) =>  {
    let newState;
    switch (action.type) {

        default:
            return state;
    }
}
