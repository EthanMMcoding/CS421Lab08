import React, { useState } from 'react';

const ClickEventExample = () => {
    // Define state
    const [message, setMessage] = useState('Click the button to see the message');

    //Handle button click
    const handleClick = () => {
        setMessage('Hello, you clicked the button');
    };

    return(
        <div>
            <h1>
                Event handling example
            </h1>
            <p>{message}</p>
            <button onClick = {handleClick}>Click Me</button>
        </div>
    )
};

export default ClickEventExample;