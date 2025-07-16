import React, { useState } from 'react'

function ControlledInput() {
    const [name, setName] = useState('')
  return (
    <div>
        <form>
            <label>
                Name:
                <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <p>Typed Name: {name}</p>
        </form>
    </div>
  )
}

export default ControlledInput