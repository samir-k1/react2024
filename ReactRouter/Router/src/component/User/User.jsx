import React from 'react'
import { useParams  } from "react-router-dom";
function User() {
    const {UserId}=useParams()



  return (
    <div>
      <div>User:{UserId}</div>
    </div>
  )
}

export default User
