import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editSong } from "../../store/songs";
import { useHistory } from "react-router-dom";

function EditForm({song}) {

  // console.log('from EditForm.js%%%%%',song.title)


  const userId = useSelector(state => state.session.user.id)
  const [title, setTitle] = useState(song.title)
  const [imageUrl, setImageUrl] = useState(song.imageUrl)
  const [validationErrors, setValidationErrors] = useState([])


  const dispatch = useDispatch();
  const history = useHistory();



  const validateEdit = () => {
    const validationErrors = [];
    if (title.length < 3) validationErrors.push('Song Title must be longer than 3 characters.')
    if (!title) validationErrors.push('Please provide a Song Title.')
    if (title.length > 255) validationErrors.push('Song Title cannot have more than 255 characters')
    if (!imageUrl.endsWith('.jpg')) validationErrors.push('Image url must be valid .png, .jpg, or .jpeg link')

    return validationErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    let payload = {
        userId,
        title,
        imageUrl
    }

    let errors = validateEdit();
    if (errors && errors.length > 0) {
        return setValidationErrors(errors);
    }

    let updatedSong = await dispatch(editSong(payload, song.id))
    if (updatedSong) {
        history.push('/')
    }
}

  return (

    <form onSubmit={handleSubmit}>
      <ul className="edit_error_msg">
            {validationErrors.length > 0 && (
                <div>
                    The Following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
                )}

            </ul>
      <h2>Edit</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}  />
      <input type="text" placeholder="Image Url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      <button type="submit">Submit Edit</button>

      <div className="support_label">
        <p>Image Url only supports .jpg*</p>
      </div>
   </form>
  )
}

export default EditForm
