export default function Home() {
  const projets = [
    {
      titre: "Site e-commerce React/Node.js",
      desc: "Développement complet d'une boutique en ligne performante et sécurisée.",
      url: "https://exemple-ecommerce.com",
    },
    {
      titre: "App gestion de tâches Next.js",
      desc: "Application web pour gérer tes projets et tâches en équipe.",
      url: "https://exemple-tasksapp.com",
    },
    {
      titre: "API REST Express.js",
      desc: "API performante et sécurisée pour gérer des données en temps réel.",
      url: "https://exemple-api.com",
    },
  ];

  return (
    <main style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: 10 }}>Tom - Développeur Full Stack</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Basé à Lille | Création d'applications web modernes et performantes</p>
      </header>

      <section style={{ marginBottom: 50 }}>
        <h2>Projets récents</h2>
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {projets.map(({ titre, desc, url }) => (
            <a key={titre} href={url} target="_blank" rel="noopener noreferrer" style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8, textDecoration: "none", color: "#222", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", transition: "transform 0.2s", display: "flex", flexDirection: "column" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 style={{ marginBottom: 10 }}>{titre}</h3>
              <p style={{ flexGrow: 1 }}>{desc}</p>
              <span style={{ marginTop: 10, color: "#0070f3", fontWeight: "bold" }}>Voir le projet →</span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 50 }}>
        <h2>À propos de moi</h2>
        <p>Je suis Tom, développeur full stack basé à Lille. Passionné par le web et les technologies modernes, je crée des applications performantes, évolutives et adaptées aux besoins des clients.</p>
        <p>Compétences : Next.js, React, Node.js, Express, MongoDB, REST API, CSS, HTML.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Envie de collaborer ? Écris-moi : <a href="mailto:tom@example.com" style={{ color: "#0070f3" }}>tom@example.com</a></p>
        <p>Retrouve-moi aussi sur <a href="https://linkedin.com/in/tom" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>LinkedIn</a> et <a href="https://github.com/Tom-coding29" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>GitHub</a>.</p>
      </section>
    </main>
  );
}
