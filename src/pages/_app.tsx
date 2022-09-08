import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../styles/theme"
import  ShowFormContext  from '../context/useShowForm'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    
    <ChakraProvider theme={theme} >
      <ShowFormContext>
        <Component {...pageProps} />
      </ShowFormContext>
    </ChakraProvider>
   )
}

export default MyApp
