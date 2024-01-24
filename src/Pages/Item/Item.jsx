import { useState,useEffect } from "react"

import { useParams
 } from "react-router-dom"
//useParams хранит инфу о динамических данных странички с URL
export default function Item() {
  const [itemUser,setUser]=useState(false)

  // const params=useParams()
  // console.log(params);

  const {idUsers}=useParams()
  // console.log(idUsers)
//ассинхронные функции делаются через useEffect
  useEffect(()=>{
    getUser()
  })

  async function getUser() {
    try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsers}`)
        const userServer = await resp.json()
        setUser (userServer)
    } catch (error) {
        console.error(error);
    }
}
 if (!itemUser) {
  <h1>Loading...</h1>
 }
  return (
    <div>
      <div className="container_user">
        <h1>{itemUser.name}</h1>
        <p>{itemUser.phone}</p>
        <p>{itemUser.email}</p>
      </div>
      </div>
  )
}
