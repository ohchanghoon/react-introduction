import React, { useState } from 'react';

const Input = () => {
    const [textValue, setTextxValue] = useState([]);

    const onChange = (e) => {
        setTextxValue(e.target.value)
    };

    return (
        <div>
            <input type='text' value={textValue} onChange={onChange} />
            <br />
            <p>{textValue}</p>
        </div>
    );
};

export default Input;
