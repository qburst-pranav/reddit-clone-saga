import React from 'react';
import PropTypes from 'prop-types';

export default function Posts({ posts }) {
  return <ul>{posts.map(({ id, title }) => <li key={id}>{title}</li>)}</ul>;
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
