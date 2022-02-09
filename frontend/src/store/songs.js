import { csrfFetch } from './csrf';


const LOAD_SONGS = 'songs/loadSongs'
const ADD_SONG = 'songs/addSong'
const UPDATE_SONG = 'songs/editSong'
// const DELETE_SONG = 'songs/delete_song'


//action creator
const loadSongs = songs => {
    return {
        type: LOAD_SONGS,
        songs
    }
}

const addSong = song => {
    return {
        type: ADD_SONG,
        song
    }
}

const updateSong = song => {
    return {
        type: UPDATE_SONG,
        song
    }
}


// thunks

//load songs thunk [read]
export const getAllSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSongs(data))
        return data;
    }

};

// upload new song thunk [create]
export const uploadNewSong = (newSong) => async (dispatch) => {
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSong)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addSong(data))
        return data
    }


}

// edit song thunk [update]
export const editSong = (song, songId) => async (dispatch) =>  {
    const response = await csrfFetch(`/api/songs/${songId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(song)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(updateSong(data))
        return data
    }

}

// songs reducer


const initalState = {
    list: [],

}

const songReducer = (state = initalState , action) => {
    let newState;
    switch (action.type) {
        case LOAD_SONGS:
            const allSongs = {};
            action.songs.forEach(song => (allSongs[song.id] = song))
            return allSongs
        case ADD_SONG:
            newState = {...state}
            newState.song = {...newState.songs, [action.song.id]: action.song }
            return newState
        case UPDATE_SONG:
            return { ...state, [action.song]: action.song}
    default:
        return state;
    }
};


export default songReducer;
