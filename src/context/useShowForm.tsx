import React, { useState, createContext, useContext, ReactNode } from "react"

export const ShowFormContext = createContext({} as ShowFormsContextProps);

type ShowFormsContextProps = {
    showForm: string;
    setShowForm: (search: string) => void; 
}

type ChildrenContextProps= {
    children: ReactNode;
}

export default function ShowFormProvider({ children }: ChildrenContextProps ){

    const [ showForm, setShowForm ] = useState<string>("none");

    return(

        <ShowFormContext.Provider
        value={{
            showForm,
            setShowForm
        }}  
        > 
            {children}    
         </ShowFormContext.Provider>

    )
}

export function useShowForm(){
    const context = useContext(ShowFormContext)
    const { showForm, setShowForm }  = context ;

    return  { showForm, setShowForm }
}