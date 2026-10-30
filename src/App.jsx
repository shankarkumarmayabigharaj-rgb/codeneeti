import React from "react";
import Icon from "./components/Icon.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { processSteps, services, stats } from "./data/siteContent.js";

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />

        <section className="stats-strip container" aria-label="CodeNeeti at a glance">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="services-intro">
              <SectionHeading
                description="Whether you have a business to grow or a skill to learn, we're here to help you make your next move."
                eyebrow="A good place to start"
                title={<>From first thought<br />to <span>what&apos;s next.</span></>}
              />
              <a className="text-link section-link" href="#contact">
                Find your starting point <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="services-grid">
              {services.map((service) => <ServiceCard key={service.number} {...service} />)}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-stamp"><span>Curiosity<br />over<br />convention</span><b>CN</b></div>
              <div className="about-note">
                <span className="note-star">✳</span>
                <span>Built on trust.<br /><b>Made to matter.</b></span>
              </div>
              <span className="about-caption">A small team with a big-picture mindset.</span>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="A little about us"
                title={<>We&apos;re here to make<br />technology feel <span>human.</span></>}
              />
              <p>
                At CodeNeeti, we believe the best digital work starts with listening. We&apos;re a
                Patna-based team of builders and mentors who care about the people behind every
                project — and the potential behind every learner.
              </p>
              <p>
                No one-size-fits-all answers. Just honest collaboration, useful technology and
                work we can be proud of.
              </p>
              <a className="button button--dark" href="#contact">
                Get to know us <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container">
            <SectionHeading
              centered
              description="Big outcomes come from good conversations and clear next steps. That's how we work."
              eyebrow="Good work, good people"
              title={<>A better way to <span>build.</span></>}
            />
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="contact-orb contact-orb--one" />
            <div className="contact-orb contact-orb--two" />
            <div className="contact-content">
              <span className="eyebrow contact-eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</span>
              <h2>Have a good idea?<br /><span>Let&apos;s make it real.</span></h2>
              <p>Tell us what you&apos;re dreaming up. We&apos;ll bring the coffee and the right questions.</p>
              <a className="button button--orange" href="mailto:info@codeneeti.in?subject=Let%27s%20talk%20about%20my%20idea">
                Start a conversation <Icon name="arrow" size={18} />
              </a>
            </div>
            <span className="contact-doodle" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
