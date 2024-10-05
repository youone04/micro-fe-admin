// import React, { useEffect } from "react";
//+ untuk micro FE
// function MicroFrontend({ name, host, history, document = window.document, customWindow = globalThis.window }) {
//   useEffect(() => {
//     const scriptId = `micro-frontend-script-${name}`;
//     const renderMicroFrontend = () => {
      
//       window[`render${name}`](`${name}-container`, history);
//     };

//     if (document.getElementById(scriptId)) {
//       renderMicroFrontend();
//       return;
//     }
    
//     fetch(`${host}/asset-manifest.json`)
//       .then((res) => res.json())
//       .then((manifest) => {
//         const script = document.createElement("script");
//         script.id = scriptId;
//         script.crossOrigin = "";
//         script.src = `${host}${manifest.files["main.js"]}`;
//         script.onload = () => {
//           renderMicroFrontend();
//         };
//         document.head.appendChild(script);
//       });

//     return () => {
//       window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
//     };
//   });

//   return <main id={`${name}-container`} />;
// }

// export default MicroFrontend;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/Layout/page.error/page.error";

function MicroFrontend({ name, host, document = window.document, customWindow = globalThis.window }) {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();  // gunakan useNavigate untuk navigasi
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      if (customWindow[`render${name}`]) {
        customWindow[`render${name}`](`${name}-container`, navigate);  // berikan navigate ke micro frontend
      } else {
        console.error(`Micro frontend ${name} gagal dirender karena fungsi render tidak ditemukan.`);
        setHasError(true);  // Tampilkan halaman error
      }
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gagal memuat asset-manifest untuk ${name}`);
        }
        return res.json();
      })
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        script.onerror = () => {
          console.error(`Gagal memuat script micro frontend untuk ${name}.`);
          setHasError(true);  // Tampilkan halaman error
        };
        document.head.appendChild(script);
      })
      .catch((error) => {
        console.error(`Error saat mencoba memuat micro frontend ${name}:`, error);
        setHasError(true);  // Tampilkan halaman error
      });

    return () => {
      if (customWindow[`unmount${name}`]) {
        customWindow[`unmount${name}`](`${name}-container`);
      }
      const script = document.getElementById(scriptId);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [name, host, document, customWindow, navigate]);  // tambahkan navigate sebagai dependency

  // Jika ada error, tampilkan halaman error
  if (hasError) {
    return <ErrorPage message={`Micro frontend ${name} tidak dapat dimuat. Silakan coba lagi nanti.`} />;
  }
  return <main id={`${name}-container`} />;
}

export default MicroFrontend;

