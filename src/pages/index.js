import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Image, Text } from "@chakra-ui/core"
import logo from '../images/cobb.jpg';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="carlys website" />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <Box bg='white' height="250px" width="500px" border="2px solid" borderColor="grey" borderRadius='3px' p={1}>
      <Flex flexDirection='row' id='#top-row' bg='green' h='25%'>
        <Flex as={Text} pr='30px' bg='orange' fontFamily='primary'>MASSACHUSETTS</Flex>
        <Flex as={Text} bg='purple'>DRIVER'S LICENSE</Flex>
      </Flex>
      <Flex flexDirection='row' bg='cyan' h='75%'>
        <Flex id="#left-side" flexDirection='column' bg='grey.100' w='33%'>
          <Box bg='red' h='75%' p={2}>
            <Image src={logo} w='100%' h='100%' borderRadius='3px' />
          </Box>
          <Box as={Text} bg='purple' h='25%' fontFamily='handwriting'>Cobbler Bobbler Ilg</Box>
        </Flex>
        <Flex id='#right-side' flexDirection='column'>
          <Box id='#section-with-issue-dates' bg='blue' >issue dates</Box>
          <Box id='#address-name-section' bg='pink'>name and address and what not</Box>
          <Box id='#eyes-sex-height-donor-section' bg='grey.300'><Text>hello</Text></Box>
        </Flex>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
