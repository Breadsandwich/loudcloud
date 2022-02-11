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
    }
    // console.log('load profile thunk', response)
    return response
}

// edit profile thunk
export const editProfile = (userData) => async (dispatch) => {
    const response = await csrfFetch(`/api/profiles/${userData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })

    if (response.ok) {
        const data = await response.json()
        await dispatch(updateProfile(data))
        return data
    }
}



//profile reducer

const initialState = {}

const profileReducer = (state = initialState , action) =>  {
    let newState;
    switch (action.type) {
        case LOAD_PROFILE: {
            newState = {...state, [action.profile.id]: action.profile}
            return newState
        }
        case EDIT_PROFILE: {
            newState = {...state};
            return {...state, [action.profile.id]: action.profile}
        }

        default:
            return state;
    }
}


export default profileReducer;
