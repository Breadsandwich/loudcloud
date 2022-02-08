import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import './MainPage.css'



const MainPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs)
    console.log('@@@@', songs)

    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])

    return (
        <div className="main_content_container">

        </div>
    )
}

export default MainPage;
