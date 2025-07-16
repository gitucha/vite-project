import React, { useState } from 'react'

function FormHandler() {
    const [formData, setFormdata] = useState({ name: "", email: "" });

    function handleChange(event) {
        setFormdata({
            // spread ternary operator
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // prevents that event from happening
        console.log("Form Submitted", formData);
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Name' />
                <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email' />
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default FormHandler