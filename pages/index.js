import React from 'react'
import { hydrate } from 'react-emotion';
import { mt4 } from '../styles/margin';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  console.log(window.__NEXT_DATA__.ids);
  hydrate(window.__NEXT_DATA__.ids)
}

export default () => {
  return (
    <div className={mt4}>
      <h1>This should have 4rems margin above it</h1>
    </div>
  )
}
