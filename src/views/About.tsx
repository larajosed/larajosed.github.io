import React, { useState } from 'react';
import '../css/About.css';

const SobreMi = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Api' },
    { id: 'database', label: 'Data Storage' },
    { id: 'testing', label: 'Testing & QA' },
    { id: 'devops', label: 'Dev & Tools' },
    { id: 'agile', label: 'Methodologies & Design' }
  ];

  const stack: Record<string, string[]> = {
    frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'D3', 'Recharts', 'Bootstrap'],
    backend: ['Spring Boot', 'Java', 'WordPress', 'WooCommerce'],
    database: ['MySQL'],
    testing: ['Jest', 'JUnit', 'Mockito', 'TDD (Test Driven Development)'],
    devops: ['Git', 'Docker', 'Postman', 'VS Code', 'GitHub Copilot'],
    agile: ['Scrum', 'Jira', 'Figma']
  };

  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-header">
        <h2 className="funnel-display-300">Sobre mi</h2>
        <div className="header-line"></div>
      </div>
      <div className="about-container">
        <div className="about-text-full">
        <p>Mi camino en el desarrollo de software se define por una curiosidad constante y las ganas de resolver problemas reales.</p>
        <p>A lo largo de mi experiencia, he ayudado tanto a empresas como a emprendedores a dar el salto al mundo digital. Puedo crear desde una tienda online moderna y automatizada para vender tus productos de forma segura, hasta plataformas web complejas y personalizadas desde cero. Me encargo de todo el proceso: diseño la idea visual, programo la página y la dejo lista y funcionando en internet.</p>
        <p>Trabajo con herramientas modernas, aplico estándares de calidad para que tu web sea rápida y segura, y utilizo inteligencia artificial para acelerar los tiempos de entrega. Además, diseño pensando en el futuro y en un mercado global, adaptando las plataformas para que funcionen en diferentes idiomas.</p>
        <p>Ya sea que necesites una página web para impulsar tu propio negocio o un desarrollador preparado para sumarse al equipo de tu empresa, estoy listo para aportar valor desde el primer día.</p>
        </div>

        <div className="about-stack-horizontal">
          <div className="stack-selector">
            <span className="stack-label">Technical Stack</span>
            <div className="tabs">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  className={activeTab === cat.id ? 'active' : ''} 
                  onClick={() => setActiveTab(cat.id)}
                >
                  <span className="icon">
                    {activeTab === cat.id ? 'ⓧ' : '○'}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="stack-grid">
            {stack[activeTab].map((tech) => (
              <div key={`${activeTab}-${tech}`} className="tech-item fade-in-tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;