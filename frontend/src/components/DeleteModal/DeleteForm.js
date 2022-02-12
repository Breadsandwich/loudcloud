import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../../store/songs";
import { useHistory } from 'react-router-dom';
import './deleteForm.css'

function DeleteForm({song, hideform}) {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(deleteSong(song.id));
        hideform();
    }



    return (
        <form className="delete_form">
            <h3>Are you sure?</h3>

            <div>
                <button className="button1" onClick={handleSubmit}>yes</button>
            </div>
        </form>
    )
}

export default DeleteForm;
