import React, { useEffect, useState } from 'react'
import User from '../User/User';

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/octocat')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    })
  return (
    <div>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="" /></div>
  )
}

export default Github