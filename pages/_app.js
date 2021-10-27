import '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Layout from '../components/layouts/Layout'
function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Layout>
      <Head>
        <title>Random App -Chakra -Next</title>
        <meta name="description" content="Just An App for testing and Portfolio Purposes. App utilizes Next SJ the Best out there and chakria UI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
