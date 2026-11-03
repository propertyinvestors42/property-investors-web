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

const strategyIconPaths = ["M3 11 12 3l9 8M5 10v11h14V10M9 21v-7h6v7","M4 8h14m-4-4 4 4-4 4M20 16H6m4-4-4 4 4 4M4 3v2m16 14v2","M4 21V3h11v18M15 9h5v12M8 7h3M8 11h3M8 15h3M8 19h3M18 13v1m0 3v1M2 21h20","M3 11 9 5l6 6M5 10v10h8v-6m2-1a3 3 0 1 1 4 3l-2 2h-2v2h-2","M3 21V4h18v17M3 12h18M12 4v17M7 8h1m8 0h1M7 16h1m8 0h1M2 21h20"];
const strategyLabels = ["TRANSFORMAR Y VENDER", "NUEVOS USOS", "VISIÓN DE CONJUNTO", "INGRESOS RECURRENTES", "ALQUILER POR HABITACIONES"];
function StrategyIcon({index}:{index:number}) { return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width:30,height:30,flexShrink:0}}><path d={strategyIconPaths[index]}/></svg>; }

export default function Home() {
  return <main>
    <section className="hero"><div className="wrap hero-inner">
      <div className="kicker">PROPERTY INVESTORS</div>
      <h1>Identificamos oportunidades.<br/><span className="gold">Impulsamos inversiones.</span></h1>
      <p>Conocemos tus objetivos, identificamos oportunidades adaptadas a ti y te acompañamos durante todo el proceso.</p>
      <div className="actions"><Link className="button" href="/inversores">Cuéntanos qué buscas</Link><a className="button button-outline" href="#como-trabajamos">Cómo trabajamos</a></div>
    </div></section>
    <section className="section wrap" id="que-hacemos"><span className="kicker">Qué hacemos</span>
      <h2>Cada inversor tiene sus objetivos.<br/>Cada activo, su oportunidad.</h2>
      <div className="grid service-grid">
        <article className="card card-body"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b79050" strokeWidth="1.6" aria-hidden="true" style={{width:32,height:32,marginBottom:18}}><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M8 12V9h4v3M10 6v1"/></svg><h3 style={{fontSize:20,letterSpacing:".04em"}}>IDENTIFICAMOS OPORTUNIDADES</h3><p style={{fontSize:18,lineHeight:1.5,marginBottom:16}}>Vemos el potencial de un activo y estudiamos cómo convertirlo en una oportunidad de inversión.</p><p className="muted">Localizamos inmuebles con posibilidades de mejora y analizamos su viabilidad, los costes, los plazos y los riesgos. A partir de ese estudio, definimos la estrategia y la forma de desarrollar cada proyecto para aprovechar su potencial.</p></article>
        <article className="card card-body"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b79050" strokeWidth="1.6" aria-hidden="true" style={{width:32,height:32,marginBottom:18}}><path d="M3 20h18M5 16l5-5 4 3 7-9M15 5h6v6"/></svg><h3 style={{fontSize:20,letterSpacing:".04em"}}>IMPULSAMOS INVERSIONES</h3><p style={{fontSize:18,lineHeight:1.5,marginBottom:16}}>Conectamos tus objetivos con oportunidades que encajen contigo.</p><p className="muted">Conocemos tu presupuesto, tus preferencias y tu horizonte de inversión para presentarte propuestas adaptadas a tu perfil. Te ayudamos a valorar cada operación y te acompañamos durante todo el proceso, con información clara y un trato cercano en cada paso.</p></article>
      </div>
    </section>
    <section className="section subtle" id="como-trabajamos"><div className="wrap"><span className="kicker">Cómo trabajamos</span><h2>De tus objetivos a una propuesta concreta.</h2>
      <div className="grid steps-grid">{steps.map(([n,t,d])=><article className="card card-body" key={n}><span className="kicker">{n}</span><h3>{t}</h3><p className="muted">{d}</p></article>)}</div>
    </div></section>
    <section className="section wrap" id="tipos-de-inversion"><span className="kicker">Tipos de inversión</span><h2>Diferentes estrategias.<br/>Un enfoque adaptado a ti.</h2>
      <div className="investment-grid">{strategies.map(([t,d],i)=><article className="investment-card" key={t}><div className="investment-card-top"><span className="investment-icon" style={{display:"inline-flex",width:62,height:62,alignItems:"center",justifyContent:"center",color:"#b79050"}}><StrategyIcon index={i}/></span><span className="investment-number">0{i+1}</span></div><span className="investment-label">{strategyLabels[i]}</span><h3>{t}</h3><p className="muted">{d}</p><span className="investment-line" aria-hidden="true"/></article>)}</div>
      <p className="muted" style={{marginTop:24}}>La estrategia, los plazos y la forma de participar se definen para cada proyecto, según las características del activo y los objetivos del inversor.</p>
    </section>
    <section className="section subtle" id="sobre-nosotros"><div className="wrap"><span className="kicker">Property Investors</span><h2>Juntos hacia tus objetivos.</h2>
      <p className="muted" style={{maxWidth:780}}>Property Investors conecta oportunidades inmobiliarias con personas que quieren invertir. Nuestro punto de partida es escuchar: entender tus objetivos y acompañarte con una propuesta adaptada a tus características. Además de buscar activos, trabajamos en generar oportunidades con una estrategia definida para cada proyecto.</p>
      <Link href="/inversores" className="button">Queremos conocerte</Link>
    </div></section>
    <section className="section subtle" id="ofrece-tu-activo"><div className="wrap"><span className="kicker">¿Tienes un inmueble con potencial?</span><h2>Acércanos tu próxima oportunidad.</h2><p className="muted" style={{maxWidth:740}}>Si eres propietario o colaborador y tienes un piso, edificio, local u otro activo que pueda encajar en un proyecto de inversión, queremos conocerlo. Comparte sus características y estudiaremos sus posibilidades.</p><Link className="button" href="/ofrece-tu-activo">Ofrece tu activo →</Link></div></section>
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
