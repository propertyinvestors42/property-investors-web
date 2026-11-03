"use client";

import Script from "next/script";

const formUrl = "https://tally.so/r/OQagQp";
const embedUrl = "https://tally.so/embed/OQagQp?alignLeft=1&hideTitle=1&dynamicHeight=1";

export default function Investors() {
  return (
    <main className="wrap section">
      <span className="kicker">Perfil inversor</span>
      <h1 className="page-title">Tu próxima inversión empieza aquí.</h1>
      <p className="muted" style={{ maxWidth: 750 }}>
        Cuéntanos tus objetivos, presupuesto y zonas de interés para que podamos
        identificar oportunidades que encajen contigo.
      </p>
      <p className="muted">2–3 minutos · Sin compromiso.</p>
      <section
        aria-label="Formulario de preferencias de inversión"
        style={{ marginTop: 28, background: "#fff", borderRadius: 16, overflow: "hidden" }}
      >
        <iframe
          src={embedUrl}
          data-tally-src={embedUrl}
          title="Formulario de inversores de Property Investors"
          width="100%"
          height="1600"
          loading="lazy"
          style={{ display: "block", border: 0 }}
        />
      </section>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onReady={() => {
          const tally = (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally;
          tally?.loadEmbeds();
        }}
      />
      <p className="muted" style={{ marginTop: 20 }}>
        ¿Prefieres abrirlo en otra pestaña?{" "}
        <a href={formUrl} target="_blank" rel="noopener noreferrer">
          Abrir el formulario
        </a>
        . También puedes escribirnos a{" "}
        <a href="mailto:info@propertyinvestors.es">info@propertyinvestors.es</a>.
      </p>
    </main>
  );
}
