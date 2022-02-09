import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import EditSongModal from '../EditSongModal'
import './MainPage.css'



const MainPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => Object.values(state.songs))

    const sessionUser = useSelector(state => state.session.user);

    let sessionButtons;
    if (sessionUser) {
        sessionButtons = (
            <>
                <EditSongModal user={sessionUser} />
            </>
        );
    } else {
        sessionButtons = (
            <>
            </>
        )
    }



    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])



    return (
        <div className="main_content_container">
            {songs.map(song => (
                <div key={`song-${song.id}`} className='songlist_item'>
                    <h2>{song.title}</h2>
                    <div className={'image_container'}>
                        <img src={`${song.imageUrl}`} alt={`${song.title}-image`} className='song_img' />
                        {sessionButtons}
                    </div>
                    <audio controls src={`${song.songUrl}`}></audio>
                </div>
            ))}
        </div>
    )
}

export default MainPage;
