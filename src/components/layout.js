import React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from '@emotion/react';

import Header from "./header"
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <>
      <Global 
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.6rem;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: white;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Helmet>
        <title>Bienes Raices</title>
        <meta name="description" content="Sitio web bienes raices" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
      </Helmet>

      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout
