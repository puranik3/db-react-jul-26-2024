// architect - helps define components, and define the pages of your app (blueprint)
import React from 'react';

// builder - take in the element where you want to create the UI, and the blueprint and creates the UI (DOM manipulations)
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement );

// JSX - HTML-like syntax used to define the UI
root.render(
  <div>
    Hello <strong>React</strong>
  </div>
)

/*
<div>
    Hello <strong>React</strong>
  </div>

  translates to

  React.createElement(
    'div',
    ...
  )
*/
