import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../../store/songs";
import { useHistory } from 'react-router-dom';
import './deleteForm.css'

function DeleteForm() {
    return (
        <form className="delete_form">
            <h3>Are you sure?</h3>

            <div>
                <button>yes</button>
                <button>cancel</button>
            </div>
        </form>
    )
}

export default DeleteForm;
