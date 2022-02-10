import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import EditSongModal from '../EditSongModal'
import DeleteModal from '../DeleteModal';
import './MainPage.css'



const MainPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => Object.values(state.songs))
    // console.log('from main page', id)


    const sessionUser = useSelector(state => state.session.user);

    let sessionButtons;
    if (sessionUser) {
        sessionButtons = (
            <>
                <EditSongModal user={sessionUser} song={songs}/>
                <DeleteModal />
            </>
        );
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
                            {sessionButtons}
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
