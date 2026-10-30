import React, { useState } from "react";
import Icon from "./Icon.jsx";

const links = [
  { label: "What we do", href: "#services" },
  { label: "Our approach", href: "#approach" },
  { label: "About us", href: "#about" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="CodeNeeti home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">C</span>
          <span className="brand-name">Code<span>Neeti</span></span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>

        <div className={`navigation-links${menuOpen ? " navigation-links--open" : ""}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button button--dark navigation-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <Icon name="arrow" size={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}
