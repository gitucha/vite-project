import React from 'react'

function ClickHandler() {

    // function handleClick(){
    //     alert('Button Clicked')
    // }
    function handleClick(name){
        alert(`Hello, ${name}!`);
    } 

  return (
    <div>
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => alert('Button clicked!')}>Click Me</button> */}
      <button onClick={() => handleClick('John')}>Click Me</button>
    </div>
  )

}

export default ClickHandler