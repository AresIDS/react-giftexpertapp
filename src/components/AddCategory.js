import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategorias(c => [inputValue, ...c]);
            setInputValue('');
        }
        // console.log('Submit hecho');
    }

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        /> <
        /form>
    )
}


AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired

}