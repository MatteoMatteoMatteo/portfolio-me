import React from 'react';
import { css } from '@emotion/react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: auto;
        max-width: 1920px;
        position: relative;
        min-height: 100vh;
        // &:hover {
        //   border: 2px solid black;
        // }
      `}>
      <div
        css={css`
          padding-bottom: 5rem;
        `}>
        {children}
        <div style={{ marginBottom: '100px' }}></div>
      </div>

      <Footer></Footer>
    </div>
  );
}
