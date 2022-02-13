import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadNewSong, getAllSongs } from "../../store/songs";
import { useHistory } from 'react-router-dom';
import './uploadForm.css'


function UploadForm({showModal}) {
    const [title, setTitle] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [validationErrors, setValidationErrors] = useState([])

    const userId = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();
    const history = useHistory();

    const validateUpload = () => {
        const validationErrors = []
        if (title.length < 3) validationErrors.push('Song Title must be longer than 3 characters.')
        if (!title) validationErrors.push('Please provide a Song Title.')
        if (title.length > 255) validationErrors.push('Song Title cannot have more than 255 characters')
        if (!songUrl.endsWith('.mp3')) validationErrors.push('Song url must be valid .mp3 link')
        if (!imageUrl.endsWith('.jpg')) validationErrors.push('Image url must be valid .jpg link')

        return validationErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            userId,
            title,
            songUrl,
            imageUrl
        }

        let errors = validateUpload();
        if (errors && errors.length > 0) {
            return setValidationErrors(errors);
        }

        const uploadedSong = await dispatch(uploadNewSong(payload))
        if (uploadedSong) {
            await dispatch(getAllSongs())
            showModal(false)

        }
    }




    return (
        <div id="upload_form_container">
            <ul className="upload_error_msg">
            {validationErrors.length > 0 && (
                <div>
                    The Following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
                )}

            </ul>
            <form className="upload_form" onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder="Song Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    />
                <input
                    type="text"
                    placeholder="Song Url"
                    value={songUrl}
                    onChange={e => setSongUrl(e.target.value)}
                    required
                    />
                <input
                    type="text"
                    placeholder="Image Url"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    required
                    />
                <button type="submit" className="submit_btn">Submit</button>

                <div className="support_label">
                    <p>Song Url only supports .mp3* </p>
                    <p>Image Url only supports .jpg*</p>
                </div>
            </form>
        </div>
      );
}

export default UploadForm;
