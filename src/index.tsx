// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
// Import DAppProvider
import { DAppProvider } from "@usedapp/core";

const config = {
  readOnlyChainId: 42,
  readOnlyUrls: {
    [42]: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  },
}

/*ReactDOM.render(
  <React.StrictMode>
    { 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    }
    <DAppProvider config={{config}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);*/

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)