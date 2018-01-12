import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/PageLayout';


const PostPage = ({ thisPost }) => {
  return (
    <Layout>
      <h1>
        {thisPost[0].title.rendered}
      </h1>
      <div className="mdStyle" dangerouslySetInnerHTML={{ __html: thisPost[0].content.rendered }} />
    </Layout>);
};

PostPage.propTypes = {
  thisPost: PropTypes.array
};

PostPage.getInitialProps = async function ({ query }) {
  const thisPost = await fetch(`http://localhost:8000/wp-json/wp/v2/posts?slug=${query.name}`);
  const jsonTP = await thisPost.json();
  return {
    thisPost: jsonTP
  };
};

export default PostPage;