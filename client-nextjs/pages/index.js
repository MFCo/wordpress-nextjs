import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import BlogList from '../components/BlogList';
import Layout from '../components/PageLayout';


const HomePage = ({ recentPosts }) =>
  <Layout>
    <BlogList recentPosts={recentPosts} />
  </Layout>;


HomePage.propTypes = {
  recentPosts: PropTypes.array
};

HomePage.getInitialProps = async function () {
  const recentPosts = await fetch('http://localhost:8000/wp-json/wp/v2/posts');
  const jsonRP = await recentPosts.json();
  return {
    recentPosts: jsonRP
  };
};

export default HomePage;