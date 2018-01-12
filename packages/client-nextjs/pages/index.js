import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

const HomePage = ({ recentPosts }) => {
  console.log(recentPosts);
  return (
    <div>
      HI!
    </div>
  );
};

HomePage.propTypes = {
  recentPosts: PropTypes.any
};

HomePage.getInitialProps = async function () {
  const recentPosts = await fetch('http://localhost:8000/wp-json/wp/v2/posts');
  const jsonRP = await recentPosts.json();
  return {
    recentPosts: jsonRP
  };
};

export default HomePage;