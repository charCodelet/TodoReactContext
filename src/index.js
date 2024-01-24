import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./app";

// One thing that was difficult for me to reconcile is that you guys were using React 17 for the coding challenge. I upgraded to React 18 and updated 
// some of the react script and sass packages. However, there were some breakages at points; the upshot is I did get some version incompatibilities
// when installing, but I just added --legacy-peer-deps - basically (in case you don't know) just a way to say that you are aware there are some
// incompatibilites but to do it anyway. Which is why I needed to use the createRoot method which was added in React 18.

// I think what I am trying to say (and probably this should have been in a README!) if there are any errors when npm installing, just add 
// --legacy-peer-deps. I hope it goes without saying I would never do this in production or even in dev for a real job, but for this
// coding challenge, I think it was appropriate. 

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
