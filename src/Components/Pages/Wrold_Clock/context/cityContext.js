import React, { createContext, useContext } from "react";

export const CityContext=createContext({
    cities:[
        {
            id:1,
            city:"city name"
        }
    ],
    addCity:(city)=>{},
    deleteCity:(id)=>{}
})

export const CityContextProvider=CityContext.Provider

export function useCity(){
    return useContext(CityContext)
}