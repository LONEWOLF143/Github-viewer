import axios from 'axios'
import { Follower } from 'interfaces/Follower'
import { Gist } from 'interfaces/Gist'
import { Repo } from 'interfaces/Repo'
import { User } from 'interfaces/User'
import React, { createContext, useEffect, useState } from 'react'

type GitUserType = {
    searchUser: string
    userExist: User | null
    followers: Follower[] | null
    gistsList: Gist | null
    repositoriesList: Repo | null
    setSearchUser:  React.Dispatch<React.SetStateAction<string | null>>
    setUserExist: React.Dispatch<React.SetStateAction<User | null>>
    setFollowers: React.Dispatch<React.SetStateAction<Gist | null>>
    setGistsLists: React.Dispatch<React.SetStateAction<Gist | null>>
    setRepositoriesList: React.Dispatch<React.SetStateAction<Repo | null>>
    searchRequest: () => Promise<void>

}

type UserContextProps = {
    children: React.ReactNode
}

const Git = createContext({} as GitUserType)
const UserContext = ({children}: UserContextProps) => {
    const [searchUser, setSearchUser] = useState<string>('');
  const [userExist, setUserExist] = useState<User>();
  const [followers, setFollowers] = useState<Follower[] | null>([]);
  const [gistsList, setGistsLists] = useState<Gist[] | null>([]);
  const [repositoriesList, setRepositoriesList] = useState<Repo[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
            const {data} = await axios.get<User>(`https://api.github.com/users/${searchUser}`)
            setUserExist(data)
    
            // fetching follower data
            const followerResponse = await axios.get<Follower[]>(data.followers_url)
            setFollowers(followerResponse.data)
    
    
        } catch(error){ 
            console.log(error)
        }
      }

  })



  return (
    <Git.Provider value={{}}>
        {children}
    </Git.Provider>
  )
}

export default UserContext