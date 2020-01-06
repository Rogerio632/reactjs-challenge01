import React from 'react';
import { render } from 'react-dom';
import PostList from './components/PostList';
import Header from './components/Header';

render(<Header />, document.getElementById('primary-nav'));
render(<PostList />, document.getElementById('content'));
