'use client'; // Importante porque usa scripts del navegador

import Script from 'next/script';

export default function ChatWidget() {
  return (
    <>
      <Script
        id="voiceflow-widget"
        onLoad={() => {
          // @ts-ignore
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              // @ts-ignore
              v.onload = function() {
                // @ts-ignore
                window.voiceflow.chat.load({
                  verify: { projectID: '69405baa7a9aa90a18c2e25e' }, // <--- AQUÍ PONDRÁS TU ID REAL LUEGO
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  render: {
                      mode: 'overlay', // Esto hace la burbujita flotante
                  },
                  autostart: false, 
                });
              };
              // @ts-ignore
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        }}
      />
    </>
  );
}