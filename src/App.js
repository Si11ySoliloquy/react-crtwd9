import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <style>{'body { background-color:#23272e; }'}</style>
      <h1 style={{ color: 'white' }}>My Portfolio!</h1>
      <p style={{ color: 'white' }}>
        Start editing to see some magic happen :)
      </p>
      <h2 style={{ color: 'white' }}> THIS IS A LINK</h2>
      <a
        href="https://twitter.com/supersillly/status/1651907768654213129"
        style={{ color: 'white' }}
      >
        <img src={'1dbf8ca743c46f13b64f82ccd36b0b8d.jpg'} alt="Twitter Logo" />
      </a>
    </div>
  );
}
