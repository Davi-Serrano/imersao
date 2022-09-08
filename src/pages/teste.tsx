import { Flex, Text } from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si"
export default function Home() {
  return (
    <Flex 
      justify="center"
      align="center"
      flexDir="column"
      bgGradient='linear(45deg , black, #8B0000)'
      minH="100vh" 
      fontSize="2em"
    >
      <Flex>
        Seu cadastro está <Text  px=".2em" color="red">  80%  </Text>concluido.
      </Flex> 
      <Flex fontSize="18px">
        Entre no grupo do Whatsapp para não perder nenhuma novidade.
      </Flex> 

      <Flex borderRadius={32}   p=".5em" my=".5em" bg="#D35000" align="center" justify="space-around" _hover={{
        cursor: "pointer",
        opacity: .8
      }}>
        <SiWhatsapp color="#39ff14" /> <Flex pl="1em"> Entrar no grupo do Whatsapp.</Flex>
      </Flex> 
      <Flex>
      
      </Flex>  
  </Flex>
  )
}