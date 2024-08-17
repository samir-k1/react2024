import React from 'react'
import { useParams  } from "react-router-dom";
function User() {
    const {userid}=useParams()



  return (
    <div>
      <div className='bg-gray-300 text-center p-3'>User:{userid}</div>
    </div>
  )
}

export default User
