import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';



const PostPage = ({ thisPost }) => {
  return (
    <React.Fragment>
      <h1>
        {thisPost[0].title.rendered}
      </h1>
      <div className="mdStyle" dangerouslySetInnerHTML={{ __html: thisPost[0].content.rendered }} />
    </React.Fragment>);
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