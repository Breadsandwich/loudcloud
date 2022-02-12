import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import { useParams } from 'react-router-dom';
import EditSongModal from '../EditSongModal'
import DeleteModal from '../DeleteModal';
import './MainPage.css'



const MainPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const songsObj = useSelector(state => state.songs)
    const songs = Object.values(songsObj)



    let sessionButtons;
    if (sessionUser) {
        sessionButtons = song => {
           return (
            <>
                <EditSongModal user={sessionUser} song={song} />
                <DeleteModal user={sessionUser} song={song} />
            </>
        )};
    }


    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])



    return (
            <div className="main_content_container">
                {songs.map(song => (
                    <div key={`song-${song.id}`} className='songlist_item'>
                        <div className='song_detail_box'>
                            <h2>{song.title}</h2>
                            <div className={'image_container'}>
                                <img src={`${song.imageUrl}`} alt={`${song.title}-image`} className='song_img' />
                                <div>
                                    {sessionUser && sessionButtons(song)}
                                </div>
                            </div>
                        </div>
                        <div className='audio_div'>
                            <audio className='audio_player' controls src={`${song.songUrl}`}></audio>
                        </div>

                    </div>
                ))}
            </div>
    )
}

export default MainPage;
