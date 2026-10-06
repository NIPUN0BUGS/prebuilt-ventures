import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  MessageCircle,
  Rocket,
  Settings2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import heroImage from "./assets/venture-hero.png";
import "./styles.css";

const whatsappHref =
  "https://wa.me/94740340101?text=Hello%20Pre-built%20Ventures%2C%20I%20want%20to%20discuss%20owning%20a%20pre-built%20business.";

const services = [
  {
    icon: Lightbulb,
    title: "Innovative Ideas",
    text: "We identify practical business opportunities with clear positioning, demand signals, and growth potential.",
  },
  {
    icon: ClipboardList,
    title: "Structured Plans",
    text: "Each venture is shaped with a business model, launch roadmap, operating plan, and measurable milestones.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    text: "We assemble the moving parts, launch the business, and coordinate the systems needed to begin operating.",
  },
  {
    icon: Settings2,
    title: "Managed Operations",
    text: "Owners stay informed while day-to-day execution, improvements, and performance tracking are handled professionally.",
  },
];

const process = [
  "Discover the owner's goals and preferred business direction.",
  "Validate the concept, plan the model, and define the operating structure.",
  "Build, launch, manage, and report with disciplined execution.",
];

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Pre-built Ventures home">
          <span className="brand-mark">PB</span>
          <span>
            <strong>Pre-built Ventures</strong>
            <small>Private Limited</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img src={heroImage} alt="" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Pre-Built Ventures (Private) Limited</p>
          <h1 id="hero-title">Not Everyone Has Time to Build a Business</h1>
          <p className="hero-copy">
            Many people want to own a business but do not have the time, knowledge, or team
            to build and manage it. That is where we come in.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={whatsappHref} target="_blank" rel="noreferrer">
              Start on WhatsApp
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#services">
              See what we build
            </a>
          </div>
          <div className="hero-stats" aria-label="Core value statements">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" />
              Idea to operation
            </span>
            <span>
              <ShieldCheck size={18} aria-hidden="true" />
              Owner-first model
            </span>
            <span>
              <TrendingUp size={18} aria-hidden="true" />
              Managed for growth
            </span>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-inner split">
          <div>
            <p className="section-kicker">Smarter Ownership</p>
            <h2>You own the business. We build and manage it strategically.</h2>
          </div>
          <p>
            Pre-built Ventures helps aspiring owners move from intention to execution with a
            professionally structured, implemented, and managed business. The offer is simple:
            reduce the friction of starting while keeping ownership clear.
          </p>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">What We Do</p>
            <h2 id="services-title">A complete venture-building partner</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="icon-shell">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="section-inner process-layout">
          <div>
            <p className="section-kicker">How It Works</p>
            <h2 id="process-title">From business idea to managed operation</h2>
            <p>
              The process is designed for busy owners who need practical execution, clear
              reporting, and a professional team watching the operational details.
            </p>
          </div>
          <ol className="process-list">
            {process.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-inner contact-panel">
          <div>
            <p className="section-kicker">Acquire A Business</p>
            <h2 id="contact-title">Ready for a smarter way of business ownership?</h2>
            <p>
              Speak with Pre-built Ventures and explore what kind of business can be built,
              implemented, and managed for your goals.
            </p>
          </div>
          <a className="contact-action" href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={21} aria-hidden="true" />
            WhatsApp +94 74 034 0101
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Pre-built Ventures</span>
        <span>Welcome to a smarter way of business ownership.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
