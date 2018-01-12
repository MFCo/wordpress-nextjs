import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NavBar from '../NavBar';

const formatPageTitle = t => `NextJs Blog${t ? ` | ${t}` : ''}`;

const PageLayout = ({ title, children }) =>
  <React.Fragment>
    <Head>
      <title>{formatPageTitle(title)}</title>
    </Head>
    <NavBar />
    <div className="layout-content">
      {children}
    </div>
    <style jsx>{`
      .layout-content {
        margin: auto;
        max-width: 1024px;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
      html {
        font-family: Arial, sans-serif;
        font-size: 18px;
        line-height: 1.5em;
      }
    `}</style>
  </React.Fragment>;



PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default PageLayout;