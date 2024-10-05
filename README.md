
# Version teknologi Architektur micro FE react js

1. yarn
2. node : 20.0.0

#

# Template penting

## kode template micro fe (Base)

``` bash 

MicroFrontend.jsx

import React, { useEffect } from "react";
function MicroFrontend({ name, host, history, document = window.document, customWindow = globalThis.window }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    const renderMicroFrontend = () => {
      
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }
    
    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
}
export default MicroFrontend;


page.admin.js

import { MicroFrontend } from "../../config";

export default function PageAdmin({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3001"} name="Admin" />
    );
}

```

## kode template micro fe (Micro)

``` bash

index.js

import React from 'react';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Make sure to import createRoot
//+ untuk micro FE
window.renderAdmin = (containerId, history) => {
  const container = document.getElementById(containerId);
  const root = createRoot(container); // Create a root for the container
  root.render(<App history={history} />); // Use root.render instead
  window[`root_${containerId}`] = root;
};


window.unmountAdmin = containerId => {
  const root = window[`root_${containerId}`]; // Ambil root yang disimpan
  if (root) {
    const container = document.getElementById(containerId);
    if (container) {
      root.unmount(); // Unmount komponen menggunakan root.unmount()
      delete window[`root_${containerId}`]; // Hapus root setelah unmount
    }
  }
};


if (!document.getElementById('Admin-container')) {
  const root = createRoot(document.getElementById('root')); // Create root for the main application
  root.render(<App />); // Use root.render instead
}
reportWebVitals();

renderAdmin dan unmountAdmin: tergantung penamaan di page.admin.js dan MicroFrontend.jsx


```

``` bash

pada micro pastingan saat setalah di run dan mengakses: 
http://localhost:3001/asset-manifest.json

tampilan:

{
  "files": {
    "main.js": "/static/js/bundle.js",
    "static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js": "/static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js",
    "index.html": "/index.html",
    "bundle.js.map": "/static/js/bundle.js.map",
    "main.hot-update.js.map": "/main.e50a40505e520f14ad04.hot-update.js.map",
    "node_modules_web-vitals_dist_web-vitals_js.chunk.js.map": "/static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js.map"
  },
  "entrypoints": [
    "static/js/bundle.js",
    "main.e50a40505e520f14ad04.hot-update.js"
  ]
}

```



