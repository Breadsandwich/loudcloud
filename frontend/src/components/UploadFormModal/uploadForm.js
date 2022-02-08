import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function UploadForm() {
    // const [title, setTitle] = useState('');
    // const [songUrl, setSongUrl] = useState('');
    // const [imageUrl, setImageUrl] = useState('');

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     const newSong = {
    //         title,
    //         songUrl,
    //         imageUrl
    //     }

    //     // const uploadedSong = await dispatch(addSong())
    // }


    return (
        <form >
          <input
                type="text"
                placeholder="Song Title"
                // value={title}
                // onChange={e => setTitle(e.target.value)}
                required
                />
            <input
                type="text"
                placeholder="Song Url"
                // value={songUrl}
                // onChange={e => setSongUrl(e.target.value)}
                required
                />
            <input
                type="text"
                placeholder="Image Url"
                // value={imageUrl}
                // onChange={e => setImageUrl(e.target.value)}
                required
                />
            <button type="submit">Submit</button>
        </form>
      );
}

export default UploadForm;
