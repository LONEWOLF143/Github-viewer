import { Gist } from "interfaces/Gist";
import React, { createContext, useContext } from "react";

type gitType = {
    children: React.ReactNode
}
const Git = createContext()

const GitContext = ({children}: gitType) => {
    <Git.Provider>{children}</Git.Provider>
}

export default GitContext

export const GitState = () => {
    return useContext(Git)
}