import Link from "next/link";

const steps = [
  ["01", "Conocemos tus objetivos", "Hablamos contigo para entender qué buscas, tu presupuesto, las zonas que te interesan y tu forma de invertir."],
  ["02", "Buscamos oportunidades", "Detectamos activos y estudiamos qué estrategia puede encajar con tus características."],
  ["03", "Presentamos el análisis", "Compartimos la propuesta, los costes previstos, los riesgos y los posibles escenarios para que puedas valorar la operación."],
  ["04", "Te acompañamos", "Mantenemos el contacto y te acompañamos durante todo el proceso de inversión."]
];
const strategies = [
  ["Compra, reforma y venta de pisos", "Activos con potencial de mejora para plantear una reforma y posterior venta."],
  ["Cambios de uso", "Activos cuya transformación puede generar valor, sujeta a la viabilidad técnica y urbanística."],
  ["Compra, reforma y venta de edificios completos", "Operaciones sobre edificios donde se estudia una estrategia conjunta de transformación y venta."],
  ["Alquiler tradicional", "Viviendas orientadas a obtener ingresos recurrentes mediante el alquiler de la vivienda completa."],
  ["Alquiler habitacional", "Inversiones orientadas al alquiler por habitaciones, valorando la distribución, los gastos y la gestión."]
];

export default function Home() {
  return <main>
    <section className="hero"><div className="wrap hero-inner">
      <div className="kicker">PROPERTY INVESTORS</div>
      <h1>Conectamos oportunidades.<br/><span className="gold">Impulsamos inversiones.</span></h1>
      <p>Conocemos tus objetivos, identificamos oportunidades adaptadas a ti y te acompañamos durante todo el proceso.</p>
      <div className="actions"><Link className="button" href="/inversores">Cuéntanos qué buscas</Link><a className="button button-outline" href="#como-trabajamos">Cómo trabajamos</a></div>
    </div></section>
    <section className="section wrap" id="que-hacemos"><span className="kicker">Qué hacemos</span>
      <h2>Cada inversor tiene sus objetivos.<br/>Cada activo, su oportunidad.</h2>
      <div className="grid service-grid">
        <article className="card card-body"><h3>Conectamos inversores y oportunidades</h3><p className="muted">Primero te conocemos. Entendemos qué quieres conseguir y buscamos oportunidades que encajen con tu presupuesto, tus preferencias y tu estrategia. Te acompañamos durante todo el proceso.</p></article>
        <article className="card card-body"><h3>También generamos oportunidades</h3><p className="muted">Localizamos activos con potencial inversor y estudiamos cómo desarrollar su valor. Según el proyecto, planteamos la estrategia y la forma de participación más adecuadas, incluidas las cuentas en participación.</p></article>
      </div>
    </section>
    <section className="section subtle" id="como-trabajamos"><div className="wrap"><span className="kicker">Cómo trabajamos</span><h2>De tus objetivos a una propuesta concreta.</h2>
      <div className="grid steps-grid">{steps.map(([n,t,d])=><article className="card card-body" key={n}><span className="kicker">{n}</span><h3>{t}</h3><p className="muted">{d}</p></article>)}</div>
    </div></section>
    <section className="section wrap" id="tipos-de-inversion"><span className="kicker">Tipos de inversión</span><h2>Diferentes estrategias.<br/>Un enfoque adaptado a ti.</h2>
      <div className="grid">{strategies.map(([t,d])=><article className="card card-body" key={t}><h3>{t}</h3><p className="muted">{d}</p></article>)}</div>
      <p className="muted" style={{marginTop:24}}>Las cuentas en participación son una modalidad de participación en un proyecto. La estrategia, el plazo y las condiciones se estudian en cada operación.</p>
    </section>
    <section className="section subtle" id="sobre-nosotros"><div className="wrap"><span className="kicker">Property Investors</span><h2>Juntos hacia tus objetivos.</h2>
      <p className="muted" style={{maxWidth:780}}>Property Investors conecta oportunidades inmobiliarias con personas que quieren invertir. Nuestro punto de partida es escuchar: entender tus objetivos y acompañarte con una propuesta adaptada a tus características. Además de buscar activos, trabajamos en generar oportunidades con una estrategia definida para cada proyecto.</p>
      <Link href="/inversores" className="button">Queremos conocerte</Link>
    </div></section>
    <section className="section wrap" id="preguntas-frecuentes"><span className="kicker">Preguntas frecuentes</span><h2>Antes de empezar.</h2>
      <div className="faq">
        <details><summary>¿Qué ocurre después de rellenar el cuestionario?</summary><p className="muted">Nos pondremos en contacto contigo para conocerte mejor, aclarar tus preferencias y valorar qué oportunidades pueden encajar.</p></details>
        <details><summary>¿Rellenar el formulario me compromete a invertir?</summary><p className="muted">No. Es un primer paso para conocernos y entender qué buscas, sin compromiso de inversión.</p></details>
        <details><summary>¿Necesito tener una estrategia definida?</summary><p className="muted">No. Puedes indicarnos que necesitas orientación y hablaremos de tus objetivos para explorar las opciones.</p></details>
        <details><summary>¿Qué capital necesito?</summary><p className="muted">Depende del activo y de la modalidad de participación. Cuéntanos tu presupuesto y tu aportación prevista para valorar propuestas acordes a tus posibilidades.</p></details>
        <details><summary>¿Dónde puedo consultar oportunidades?</summary><p className="muted">Ponte en contacto con nosotros o completa el cuestionario. Te presentaremos las propuestas que podamos ofrecerte y que encajen con tu perfil.</p></details>
        <details><summary>¿Cómo puedo solicitar una reunión?</summary><p className="muted">Puedes elegir el día y la hora disponibles en nuestro calendario. También puedes escribirnos por correo o WhatsApp.</p><a href="https://calendly.com/property-investors/meeting" target="_blank" rel="noopener noreferrer">Reservar una reunión →</a></details>
      </div>
    </section>
    <section className="section subtle"><div className="wrap"><span className="kicker">Hablemos</span><h2>Tu próxima inversión empieza por conocernos.</h2><p className="muted">Cuéntanos qué buscas. Nos pondremos en contacto contigo para dar el siguiente paso.</p><div className="actions"><Link href="/inversores" className="button">Completar mi perfil inversor</Link><a href="https://calendly.com/property-investors/meeting" className="button" target="_blank" rel="noopener noreferrer">Solicitar una reunión</a><a href="https://wa.me/34624423824" className="button" target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a><a href="mailto:info@propertyinvestors.es" className="button">Enviar un correo</a></div><p className="muted" style={{marginTop:24}}><a href="tel:+34624423824">624 423 824</a> · <a href="mailto:info@propertyinvestors.es">info@propertyinvestors.es</a></p></div></section>
  </main>;
}
