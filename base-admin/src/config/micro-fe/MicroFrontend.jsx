import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/Layout/page.error/page.error";
import PageLoading from "../../components/Layout/page.loading/page.loading";

function MicroFrontend({ name, host, document = window.document, customWindow = globalThis.window }) {
  const [hasError, setHasError] = useState(false);
  const [hasIsLoading, setIsLoading] = useState(true); // State untuk loading
  const navigate = useNavigate();  // gunakan useNavigate untuk navigasi
  
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      if (customWindow[`render${name}`]) {
        customWindow[`render${name}`](`${name}-container`, navigate);  // berikan navigate ke micro frontend
      } else {
        console.error(`Micro frontend ${name} gagal dirender karena fungsi render tidak ditemukan.`);
        setHasError(true);  // Tampilkan halaman error
        setIsLoading(false); // Selesai loading
      }
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      setIsLoading(false); // Selesai loading
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
          setIsLoading(false); // Selesai loading setelah script berhasil dimuat
        };
        script.onerror = () => {
          console.error(`Gagal memuat script micro frontend untuk ${name}.`);
          setHasError(true);  // Tampilkan halaman error
          setIsLoading(false); // Selesai loading
        };
        document.head.appendChild(script);
      })
      .catch((error) => {
        console.error(`Error saat mencoba memuat micro frontend ${name}:`, error);
        setHasError(true);  // Tampilkan halaman error
        setIsLoading(false); // Selesai loading
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
    return <ErrorPage message={`Micro frontend ${name} tidak dapat dimuat. Silakan coba lagi nanti.`} />
  } 

  // Jika berhasil dimuat, tampilkan kontainer micro frontend
  return (
    <main id={`${name}-container`}>
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            width: '100%',
        }}>{hasIsLoading && <PageLoading/>}</div>
    </main>
  )
}

export default MicroFrontend;
