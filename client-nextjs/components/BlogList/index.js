import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

const BlogList = ({recentPosts}) =>
  <ul>
    {
      recentPosts.map((element) => {
        return (
          <li key={element.slug}>
            <Link href={`post?name=${element.slug}`}>
              <a>
                {element.title.rendered}
              </a>
            </Link>
          </li>
        );
      }
      )
    }
  </ul>;

BlogList.propTypes={
  recentPosts: PropTypes.array
};

export default BlogList;