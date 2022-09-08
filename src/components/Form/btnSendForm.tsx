import { Button } from "@chakra-ui/react";

export function BtnSendForm() {
    return(
        <Button 
            bg="#D35000" 
            width="full"
            _hover={{
            opacity: .8
            }}    
        >
        Enviar
        </Button>
)
}