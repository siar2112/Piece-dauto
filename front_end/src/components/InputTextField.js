import React, { useState } from 'react';
import './/StyleComponents/InputTextField.css';

const InputTextField = ({ type, label, name, onChange, pattern}) => {
    const [hasContent, setHasContent] = useState(false);


    const handleBlur = (e) => {
        if (e.target.value !== "") {
            setHasContent(true);
        } else {
            setHasContent(false);
        }
    }

    return (
        <div>
            <input onBlur={handleBlur} className={`textField ${hasContent ? 'has-content' : ''}`} type={type} name={name} pattern={pattern} onChange={onChange} />
            <label className="theLabel">{label}</label>
            <span className="focus-border"></span>
        </div>
    );
}

export default InputTextField;