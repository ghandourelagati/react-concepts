import React, { Component } from 'react';

export default class ListsAndKeysUl extends Component {
  render() {
    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      {
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.',
      },
    ];

    const sideBar = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
    const content = posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content} </p>
      </div>
    ));
    return (
      <div>
        {sideBar}
        <hr />
        {content}
      </div>
    );
  }
}
