import  { useState } from 'react'
import { useEffect } from 'react';

const Github = () => {

     const [ data,setData]=useState([])
    useEffect(() => {
       
        fetch('https://api.github.com/users/samir-k1')
       .then(response=> response.json())
       .then(data=>{
        console.log(data)
        setData(data)

       })
    }, []);


  return (
    <div className='text-xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt='github image' width={300}/>
      
    </div>
  )
}

export default Github

// export const githubLoader=async ()=> {
//     const response=await fetch('https://api.github.com/users/samir-k1')
//     return response.json
    
// }
