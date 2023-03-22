import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()

export function UserProvider({children}){
  const [username, setUsername] = useState(null)
  const [lastname, setLastname] = useState(null)

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user")
    if(localStorageUser){
      setUsername(JSON.parse(localStorageUser))
    }
  }, [])

  function login(username, lastname){
    setUsername(username)
    setLastname(lastname)
    localStorage.setItem("nameUser", JSON.stringify(username))
    localStorage.setItem("lastName", JSON.stringify(lastname))
  }

  function logout(){
    setUsername(null)
    setLastname(null)
    localStorage.removeItem("nameUser")
    localStorage.removeItem("lastName")
  }

  const logged = Boolean(username, lastname)
  const userLogged = username || {}

  return(
    <UserContext.Provider value={{logged, userLogged, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}
