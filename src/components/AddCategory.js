import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setcategories }) => {
    const [inputValue, setinputValue] = useState("");
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue, ...cats])
            setinputValue('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}>
                </input>
            </form>
        </div>
    )
}

export default AddCategory;
AddCategory.protoTypes = {
    setcategories: PropTypes.func.isRequired
}