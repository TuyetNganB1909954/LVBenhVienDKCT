import React , {createContext}from 'react'
import BacSiAPI from './api/BacSiAPI'
import ChuyenKhoaAPI from './api/ChuyenKhoaAPI'

export const GlobalState = createContext()


export const DataProvider = ({children}) => {

    const state = {
        bacsiAPI:BacSiAPI(),
        chuyenkhoaAPI: ChuyenKhoaAPI()

        
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}

