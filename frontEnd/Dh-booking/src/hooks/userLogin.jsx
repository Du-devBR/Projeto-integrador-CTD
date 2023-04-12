import {createContext, useEffect, useState} from "react";

export const UserContext = createContext()

export function UserProvider({children}){
  const [username, setUsername] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [email, setEmail] = useState(null)

  useEffect(() => {
    const localStorageUser = localStorage.getItem("dados")
    if(localStorageUser){
      setUsername(JSON.parse(localStorageUser))
    }
  }, [])

  function login(username, lastname, email){
    setUsername(username)
    setLastname(lastname)
    setLastname(email)
    localStorage.setItem("email", JSON.stringify(email))
    localStorage.setItem("nameUser", JSON.stringify(username))
    localStorage.setItem("lastName", JSON.stringify(lastname))
  }

  function logoutContext(){
    setUsername(null)
    setLastname(null)

  }

  const logged = Boolean(username, lastname)

  const userLogged = username || {}

  return(
    <UserContext.Provider value={{logged, userLogged, login, logoutContext}}>
      {children}
    </UserContext.Provider>
  )
}
