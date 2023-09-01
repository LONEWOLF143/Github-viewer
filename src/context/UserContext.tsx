import axios from 'axios';
import { Follower } from 'interfaces/Follower';
import { Gist } from 'interfaces/Gist';
import { Repo } from 'interfaces/Repo';
import { User } from 'interfaces/User';
import React, { createContext, useEffect, useState } from 'react';

type GitUserType = {
  searchUser: string;
  searchInput: string
   setSearchInput: React.Dispatch<React.SetStateAction<string>>
  userExist: User | null;
  followers: Follower[] | null;
  gistsList: Gist[] | null;
  repositoriesList: Repo[] | null;
  setSearchUser: React.Dispatch<React.SetStateAction<string>>;
  setUserExist: React.Dispatch<React.SetStateAction<User | null>>;
  setFollowers: React.Dispatch<React.SetStateAction<Follower[] | null>>;
  setGistsLists: React.Dispatch<React.SetStateAction<Gist[] | null>>;
  setRepositoriesList: React.Dispatch<React.SetStateAction<Repo[] | null>>;
  searchRequest: () => Promise<void>;
};

type UserContextProps = {
  children: React.ReactNode;
};

const GitContext = createContext({} as GitUserType);

const UserContext = ({ children }: UserContextProps) => {
    const [searchInput, setSearchInput] = useState<string>('');
  const [searchUser, setSearchUser] = useState<string>('');
  const [userExist, setUserExist] = useState<User | null>(null);
  const [followers, setFollowers] = useState<Follower[] | null>(null);
  const [gistsList, setGistsLists] = useState<Gist[] | null>(null);
  const [repositoriesList, setRepositoriesList] = useState<Repo[] | null>(null);

  const searchRequest = async () => {
    try {
      const { data } = await axios.get<User>(`https://api.github.com/users/${searchUser}`);
      setUserExist(data);

      // Fetch follower data
      const followerResponse = await axios.get<Follower[]>(data.followers_url);
      setFollowers(followerResponse.data);

      // Fetch gists
      const gistResponse = await axios.get<Gist[]>(data.gists_url.replace(/\{.*\}/, ''));
      setGistsLists(gistResponse.data);

      // Fetch repositories using the correct URL
      const repoResponse = await axios.get<Repo[]>(data.repos_url);
      setRepositoriesList(repoResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Trigger the fetch when needed by calling searchRequest
    if (searchUser) {
      searchRequest();
    }
  }, [searchUser]);

  return (
    <GitContext.Provider
      value={{
        searchUser,
        userExist,
        followers,
        gistsList,
        repositoriesList,
        setSearchUser,
        setUserExist,
        setFollowers,
        setGistsLists,
        setRepositoriesList,
        searchRequest,
        searchInput,
         setSearchInput
      }}
    >
      {children}
    </GitContext.Provider>
  );
};

export default UserContext;
