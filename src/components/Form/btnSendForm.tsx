import Router from "next/router";
import axios from "axios";

import { UserDatasProps } from "../../types/types";

import { Button, useToast, Spinner   } from "@chakra-ui/react";
import { useState } from "react";



export function BtnSendForm({name, email, confirmEmail, tel}: UserDatasProps) {
    const [ sending, setSending ] = useState("enviado")

    const toast = useToast ()

    const userData = {
        name,
        email,
        confirmEmail,
        tel
    }

    async function handleSubmitForm(){
        
        if( tel.length  < 10 || name.length < 5 || email.length < 6 ){
            toast({
                title: 'Erro ao cadastrar!.', 
                position: "top",          
                description: `Por Favor! Prenchaa todo os dados corretamente.`,
                status: 'error',
                isClosable: true,
            })
        }
        else if( email !== confirmEmail ){
            toast({
                title: 'Erro ao cadastrar!.', 
                position: "top",          
                description: `Os emails são diferentes.`,
                status: 'error',
                isClosable: true,
            })
        }

        else{
        try{  
            setSending("aguarde") 
            await axios.post("/api/user", userData)
            toast({
                title: 'Cadastrado com sucesso', 
                position: 'top',          
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            Router.push("./teste")
        } catch(err){
            toast({
                title: 'Erro ao cadastrar!.', 
                position: "top",          
                description: `Erro ao enviar o formulário, por favor tente novamente mais tarde`,
                status: 'error',
                isClosable: true,
            })
            console.log(err)
        }
    }
    }

    if(sending  ===  "enviado"){
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
    }else{
        return(
            <Button 
                bg="#D35000" 
                width="full"
                _hover={{
                opacity: .8
                }}
            >
                <Spinner />Enviando
            </Button>
        )
    }
}