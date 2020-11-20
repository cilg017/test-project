/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { ChakraProvider, theme as defaultTheme, extendTheme } from "@chakra-ui/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const customTheme = extendTheme({
    colors: {
      brand: {
        900: "#b4d455",
        800: "#153e75",
        700: "#2a69ac",
      },
      cyan: '#0BC5EA',
      green: '#68D391',
      purple: '#B794F4',
      red: '#E53E3E',
      white: '#FFF',
      black: '#000',
      grey: {
        100: '#EDF2F7',
        300: '#CBD5E0',
        500: '#718096',
        700: '#2D3748',
        900: '#171923'
      },
      orange: '#ED8936',
      blue: '#63B3ED',
      pink: '#FBB6CE'
    },
    fonts: {
      primary: 'Courier New, monospace',
      handwriting: 'Bradley Hand, cursive'
    }
  })

  return (
    <>
      <ChakraProvider theme={customTheme}>

        <Header siteTitle={`carly website`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer style={{
            marginTop: `2rem`
          }}>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </ChakraProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
