import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function Users() {
    const[users, setUsers]=useState(false)
//чтобы отрисовывалась 1 раз:
    useEffect(()=>{
getUsers()
    }, [])
    async function getUsers() {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const usersServer = await resp.json()
            setUsers (usersServer)
        } catch (error) {
            console.error(error);
        }
    }
//Условие, если юзеры еще не подгрузились, то будет загрузка
    if(!users){
        return <h1>Loaing...</h1>
    }
  return (
    <div>{users.map((item,index)=>(
        <Link to={`/item/${item.id}`} key={index}>
            <h2>{item.name}</h2>
            <p>{item.phone}</p>
            <p>{item.website}</p>
        </Link>
    ))}</div>
  )
}
