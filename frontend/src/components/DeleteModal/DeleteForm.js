import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../../store/songs";
import { useHistory } from 'react-router-dom';
import './deleteForm.css'

function DeleteForm({id, hideform}) {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(deleteSong(id));
        hideform();
    }

    const handleCancel = e => {
        e.preventDefault();
        hideform();
    }

    return (
        <form className="delete_form">
            <h3>Are you sure?</h3>

            <div>
                <button className="delete_yes_btn" onClick={handleSubmit}>yes</button>
                <button className="delete_cancel_btn" onClick={handleCancel}>cancel</button>
            </div>
        </form>
    )
}

export default DeleteForm;
