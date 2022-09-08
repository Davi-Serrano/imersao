import Router from "next/router";
import axios from "axios";

import { UserDatasProps } from "../../types/types";

import { Button } from "@chakra-ui/react";



export function BtnSendForm({name, email, confirmEmail, tel}: UserDatasProps) {

    const userData = {
        name,
        email,
        confirmEmail,
        tel
    }

    async function handleSubmitForm(){
        
        await axios.post("/api/user", userData)
        Router.push("./teste")
    }

    return(
        <Button 
            bg="#D35000" 
            width="full"
            _hover={{
            opacity: .8
            }}
            onClick={handleSubmitForm}    
        >
        Enviar
        </Button>
)
}