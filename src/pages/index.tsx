import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BtnSendDataClient } from "../components/button"
import { Form } from "../components/Form/form"

export default function Home() {

  return (
    <Flex
      justify="center"
      align="center"
      bgGradient='linear(45deg , black, #8B0000)'
      minH="100vh"
    >
      <Flex
      flexDir="column"
      align="center"
    >
      <Text as="h1" mb="2em" textAlign="center" pt="1em" fontSize={["2em", "3em"]}>IMPERATRIZ EMPREENDEDORA​ </Text>


      <Text fontSize={["16px","18px", "22px"]} textAlign={["justify", "justify", "center"]} w={["80%","65%"]}>
          Na imersão IMPERATRIZ EMPREENDEDORA​ você vai aprender os principais pilares para se tornar uma empreendedora de sucesso, desde posicionamento e desenvolvimento pessoal até técnicas de vendas para vender todos os dias usando a internet com tecnicas que poderão facilmente também te ajudar com a sua loja fisica, mesmo que você esteja apenas começando.  Nessa imersão te ajudarei a programar a sua mente para estar sempre voltada ao sucesso, como enfrentar barreiras que possam estar te impedindo de alcançar aquilo que almeja.
      </Text >
       
      
      <BtnSendDataClient 
      />

      <Form />
      </Flex>
    </Flex>
  )
}


