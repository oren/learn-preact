./node_modules/.bin/babel index.js --out-file bundle.js

SyntaxError: index.js: Unexpected token (25:15)
  23 |     render(props, state) {
  24 |         let time = new Date(state.time).toLocaleTimeString();
> 25 |         return <span>{ time }</span>;
     |                ^
  26 |     }
  27 | }

