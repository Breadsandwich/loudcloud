import { csrfFetch } from './csrf';


const GET_SONGS = 'songs/getSongs'
const ADD_SONG = 'songs/addSong'
const EDIT_SONG = 'songs/editSong'
const DELETE_SONG = 'songs/delete_song'


//action creator
const getSongs = songs => {
    return {
        type: GET_SONGS,
        songs
    }
}


// thunks

//get songs thunk
export const getAllSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json();
    dispatch(getSongs(data))
};

// songs reducer
const initialState = {}
const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS:
            return {...state, initialState: [...action.songs]}
    default:
        return state;
    }
};


export default songReducer;
