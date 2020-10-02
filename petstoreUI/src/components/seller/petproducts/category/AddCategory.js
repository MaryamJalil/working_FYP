import React, { useState } from "react";

// import { isAuthenticated } from "../../../auth";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {createCategory} from '../../../../actions/categoryAction';
import Alert from '../.././../../layout/Alert'

const AddCategory = ({auth, createCategory}) => {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        createCategory(name,auth.user._id)
    }

    return (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
            <Alert />
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );
};

AddCategory.propTypes = {
    auth: PropTypes.object.isRequired,
    createCategory: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps, {createCategory}) (AddCategory));
