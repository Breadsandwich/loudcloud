import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import './MainPage.css'



const MainPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => Object.values(state.songs))


    console.log('@@@@@',songs)

    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])



    return (
        <div className="main_content_container">
            {songs.map(song => (
                <div key={`song-${song.id}`} className='songlist_item'>
                    <h2>{song.title}</h2>
                    <div classname={'image_container'}>
                        <img src={`${song.imageUrl}`} alt={`${song.title}-image`} className='song_img' />
                    </div>
                    <audio controls src={`${song.songUrl}`}></audio>
                </div>
            ))}
        </div>
    )
}

export default MainPage;
