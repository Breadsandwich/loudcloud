import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { editProfile } from "../../store/profiles";

const EditProfileForm = ({profile, showModal}) => {
    // console.log('from EditProfileForm.js%%%%%%%', profile)

    const userId = useSelector(state => state.session.user.id)
    const [name, setName] = useState(profile.name)
    const [location, setLocation] = useState(profile.location)
    const [profilePicUrl, setProfilePicUrl] = useState(profile.profilePicUrl)
    const [bio, setBio] = useState(profile.bio)
    const [validationErrors, setValidationErrors] = useState([])

    const dispatch = useDispatch();
    const history = useHistory();

    const validateEdit = () => {
        const validationErrors =[];
        if (!profilePicUrl.endsWith('.jpg')) validationErrors.push('Image url must be a valid .jpg link')

        return validationErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId,
            name,
            location,
            profilePicUrl,
            bio
        }

        let errors = validateEdit();
        if (errors && errors.length > 0) {
            return setValidationErrors(errors);
        }

        let updatedProfile = await dispatch(editProfile(payload, profile.id))
        if (updatedProfile) {
            showModal(false)
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
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            <input type="text" placeholder="Profile Picture" value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} />
            <textarea
                name="bio"
                id="bio_textarea"
                cols="30"
                rows="5"
                placeholder="Tell us something about you"
                value={bio}
                onChange={e => setBio(e.target.value)}
            />


            <button>Submit Changes</button>

        </form>
    )
}

export default EditProfileForm
