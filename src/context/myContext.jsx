import { createContext } from "react";

// 1st Step
export const MyMainContext = createContext();

// 2nd Step
export const MyContextProvider = ({children}) => {

    const myName = "Abdullah";
    const age = 19

    return( 
        <MyMainContext.Provider value={{myName, age}}>
            {children}
        </MyMainContext.Provider>
    );

}