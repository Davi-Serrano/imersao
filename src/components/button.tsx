import { Flex} from "@chakra-ui/react"
import { useShowForm } from "../context/useShowForm"



export function BtnSendDataClient(){
  const { setShowForm } = useShowForm()

    return(
        <Flex
              justify="center"
              align="center"  
              bg="#D35000"
              color="#fff"
              fontSize="20px"
              p=".3em 2em"
              borderRadius="8px"
              mx="auto"
              mt="1em"
              transition=".3s"
              _hover={{
                cursor: "pointer",
                opacity: .8,
              }}
             onClick={()=>setShowForm("block")}
            >
           QUERO ME CADASTRAR NA IMERSÃO IMPERATRIZ EMPREENDEDORA
            </Flex>
    )
   

    
}