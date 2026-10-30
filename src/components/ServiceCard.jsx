import React from "react";
import Icon from "./Icon.jsx";

export default function ServiceCard({ number, icon, title, description, tags }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon name={icon} size={23} /></span>
        <span className="service-number">{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="service-tags" aria-label={`${title} capabilities`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <a className="card-link" href="#contact" aria-label={`Discuss ${title}`}>
        <Icon name="arrow" size={19} />
      </a>
    </article>
  );
}
