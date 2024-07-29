// architect - helps define components, and define the pages of your app (blueprint)
import React from 'react';

// builder - take in the element where you want to create the UI, and the blueprint and creates the UI (DOM manipulations)
import ReactDOM from 'react-dom/client';
import Application from './App';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement );

// JSX - HTML-like syntax used to define the UI
root.render(
  <>
    {/* create multiple Application components */}
    {/* we pass customized info through props */}
    <Application
      title="Workshops App"
      subtitle="Welcome to Workshops App. You can find details of nearby workshops."
    />
    {/*
    <Application
      title="What is React?"
      subtitle="It is a library to build frontend SPA"
    />
    */}
  </>
)

// root.render(
//   <div>
//     Hello <strong>React</strong>
//   </div>
// )

/*
<div>
    Hello <strong>React</strong>
  </div>

  translated by Babel to

  React.createElement(
    'div',
    ...
  )

Babel is run through Webpack (module bundler - creates the bundle.js)
TypeScript compiler is also run through Webpack
*/
