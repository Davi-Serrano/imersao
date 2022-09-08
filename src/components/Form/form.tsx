import {
    Box, Button, Flex, FormControl, FormLabel, Input, VStack
  } from "@chakra-ui/react";
import { useState } from "react";

import { useShowForm } from "../../context/useShowForm";
import { BtnSendForm } from "./btnSendForm";

  export function Form() {
    const { showForm, setShowForm } = useShowForm()

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ confirmEmail, setConfirmEmail ] = useState("")
    const [ tel, setTel ] = useState("")

    return (
      <Flex  
          align="center" 
          justify="center" 
          top="20%" 
          left="10%" 
          zIndex={10}
          position="absolute"
          h="80%"
          display={showForm}
        >
        <Box bg="white" w="80vw" p="6" rounded="md">
            <VStack spacing={4} align="flex-start">
              <FormControl color="black">
             
              <FormLabel mb="0">Seu Nome Completo</FormLabel>
                <Input
                onChange={(e)=>setName(e.target.value)}
                />
               
               <FormLabel mb="0">Seu melhor E-mail</FormLabel>
                <Input
                onChange={(e)=>setEmail(e.target.value)}
                />
                
                <FormLabel mb="0">Confirme seu E-mail</FormLabel>
                <Input
                onChange={(e)=>setConfirmEmail(e.target.value)}
                />
                
                <FormLabel mb="0">Telefone</FormLabel>
                <Input
                onChange={(e)=>setTel(e.target.value)}
                
                />
              </FormControl>
              
              <BtnSendForm 
                name={name}
                email={email}
                confirmEmail={confirmEmail}
                tel={tel}

              
              />

              <Button 
                  bg="#D35000" 
                  width="full"
                  _hover={{
                    opacity: .8
                  }}
                  onClick={()=>setShowForm("none")}    
              >
               Fechar
              </Button>
            </VStack>
         
        </Box>
      </Flex>
    );
  }