// import React from 'react'
// const names = ['John', 'Jane', 'Bob']

// function Namelist() {
//   return (
//     <div>
//         <ul>
//             {names.map((names, index) => (
//                 <li key={index}>{names}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Namelist

import React from 'react'
 
const users = [
    {id: 1001, name: "John"},
    {id: 1002, name: "Jane"},
    {id: 1003, name: "Grace"},
    {id: 1004, name: "Bob"},

]

function Namelist() {
  return (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Namelist