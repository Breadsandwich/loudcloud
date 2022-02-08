import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/songs';
import './MainPage.css'



const MainPage = () => {
    return (
        <div className="main_content_container">
            <ul className='songList_item'>

            </ul>
        </div>
    )
}

export default MainPage;
