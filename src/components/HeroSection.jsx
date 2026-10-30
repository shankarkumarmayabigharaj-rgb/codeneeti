import React from "react";
import Icon from "./Icon.jsx";

export default function HeroSection() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <span className="eyebrow hero-eyebrow">
          <span className="eyebrow-dot" /> Web · App · Training
        </span>
        <h1>
          Good ideas
          <br />
          deserve to
          <br />
          <span>go digital.</span>
        </h1>
        <p className="hero-description">
          We build digital products that move your business forward — and help tomorrow&apos;s
          creators build the skills to shape what comes next.
        </p>
        <div className="hero-actions">
          <a className="button button--orange" href="#contact">
            Tell us your idea <Icon name="arrow" size={18} />
          </a>
          <a className="text-link" href="#services">
            Explore what we do <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="avatar-stack" aria-hidden="true">
            <span>A</span><span>K</span><span>N</span>
          </span>
          <span>Good people. Thoughtful work. Real results.</span>
        </div>
      </div>

      <div className="hero-art" aria-label="A preview of a digital product being built">
        <div className="art-orbit art-orbit--one" />
        <div className="art-orbit art-orbit--two" />
        <div className="art-sticker">
          <Icon name="sparkle" size={22} />
          <span>Made for<br />what&apos;s next</span>
        </div>
        <div className="product-card">
          <div className="product-card-top">
            <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
            <span>your-next-big-thing.in</span>
            <span className="product-menu">•••</span>
          </div>
          <div className="product-card-body">
            <div className="product-nav">
              <span className="product-logo"><i /> studio</span>
              <span>Work&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; Contact</span>
            </div>
            <div className="product-hero">
              <div>
                <span className="product-kicker">A little different. A lot more you.</span>
                <strong>Ideas into<br /><em>impact.</em></strong>
                <span className="product-pill">Discover the studio <b>↗</b></span>
              </div>
              <div className="product-graphic" aria-hidden="true">
                <div className="graphic-sun" />
                <div className="graphic-arch" />
                <div className="graphic-flower">✳</div>
              </div>
            </div>
            <div className="product-foot">
              <span>DESIGNED TO MAKE A DIFFERENCE</span>
              <span>01 — 04</span>
            </div>
          </div>
        </div>
        <div className="floating-badge floating-badge--top">
          <span className="badge-check">✓</span>
          <span><b>Built with care</b><small>From first sketch to launch</small></span>
        </div>
        <div className="floating-badge floating-badge--bottom">
          <span className="badge-spark">✳</span>
          <span><b>Big idea energy</b><small>Small team. Full heart.</small></span>
        </div>
      </div>
    </section>
  );
}
