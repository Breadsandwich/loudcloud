import { csrfFetch } from './csrf';


const LOAD_SONGS = 'songs/loadSongs'
// const ADD_SONG = 'songs/addSong'
// const EDIT_SONG = 'songs/editSong'
// const DELETE_SONG = 'songs/delete_song'


//action creator
const loadSongs = songs => {
    return {
        type: LOAD_SONGS,
        songs
    }
}


// thunks

//load songs thunk
export const getAllSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSongs(data))
        return data;
    }

};

// songs reducer



const songReducer = (state = {} , action) => {
    switch (action.type) {
        case LOAD_SONGS:
            const allSongs = {};
            action.songs.forEach(song => (allSongs[song.id] = song))
            return allSongs
    default:
        return state;
    }
};


export default songReducer;
