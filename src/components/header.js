import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'

import Navegacion from './navegacion';
import { css } from '@emotion/core'

const Header = () => {
    const { logo } = useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo.svg"}){
          publicURL
        }
      }
      
`)
    return (
        <header css={css`
          background-color: #0d283d;
          padding: 1rem;
        
        `}>
            <div
                css={css`
                max-width: 120rem;
                margin: 0 auto;
                text-align: center;

                @media (min-width: 720px) {
                    display: flex;
                    align-items:center;
                    justify-content: space-between
                }
            `}
            >
                <Link to={'/'} style={{display: 'flex', justifyContent: 'center'}}>
                   <img
                   width="50"
                   height="50"
                   src={logo.publicURL} alt="Logotipo Bienes Raices"
                   />
                </Link>
                <Navegacion />
            </div>
        </header>
    );
}

export default Header;