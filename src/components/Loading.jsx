import React from 'react';
import '../styles/Loading.css';

function Loading() {
  return (
    <div className="loading-screen">
      <div className="loader" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
