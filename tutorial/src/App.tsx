import { createEffect, createSignal } from "solid-js";

import type { Component } from "solid-js";

const App: Component = () => {
  const name = "Zero";
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log(`The count is now ${count()}!`);
  });

  const svg = (
    <svg height="300" width="400">
      <defs>
        <linearGradient id="gr1" x1="0%" y1="60%" x2="100%" y2="0%">
          <stop offset="5%" style="stop-color:rgb(255,255,3);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="125" cy="150" rx="100" ry="60" fill="url(#gr1)" />
      Sorry but this browser does not support inline SVG.
    </svg>
  );

  setInterval(() => setCount((c) => c + 1), 1000);

  return (
    <>
      <p>Hello {name}!</p>
      {svg}
      {count()}
      <button onClick={() => setCount(count() + 1)}>Click Me</button>
    </>
  );
};

export default App;
