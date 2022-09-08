import { Center, Flex, Link, Text } from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si"
export default function Home() {
  return (
    <Flex 
      justify="center"
      align="center"
      flexDir="column"
      bgGradient='linear(45deg , black, #8B0000)'
      minH="100vh" 
      fontSize={["26px", "2em"]}
    >
      <Flex flexDir={["column", "row"]} justify="center" align="center">
        Seu cadastro está <Text color="red" px=".2em">80%</Text> concluido.
      </Flex> 
      <Flex textAlign="center" fontSize="18px" m="2em">
        Entre no grupo do Whatsapp para não perder nenhuma novidade.
      </Flex> 
    <Link href="https://chat.whatsapp.com/Ie4AtA42JADHXDBYzerfnR" isExternal>
      <Flex 
          borderRadius={32}   
          p=".5em" my=".5em" 
          bg="#D35000" 
          align="center" 
          justify="space-around"
          maxW="80vw" 
          _hover={{
            cursor: "pointer",
            opacity: .8
          }}
        >
        <SiWhatsapp color="#39ff14" size={60} /> <Flex pl="1em"> Entrar no grupo do Whatsapp.</Flex>
      </Flex> 
      </Link>
      <Flex>
      
      </Flex>  
  </Flex>
  )
}