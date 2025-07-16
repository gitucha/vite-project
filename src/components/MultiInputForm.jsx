import React, { useState } from 'react'

function MultiInputForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',    
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
  return (
    <div>
        <form>

            <label>
                username:
                <input 
                type="text" 
                name='username'
                value={formData.username}
                onChange={handleChange}
                />
            </label>

            <br />

              <label>
                Email:
                <input 
                type="text" 
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
            </label>
            
        </form>
        <p>Username: {formData.username}, Email:{formData.email} </p>
    </div>
  )
}

export default MultiInputForm