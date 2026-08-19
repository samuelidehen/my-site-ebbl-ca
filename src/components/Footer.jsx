import { footer } from "../content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__wordmark">EBBL</span>
          <span className="site-footer__subtitle">Église Baptiste</span>
          <p className="site-footer__tagline">{footer.tagline}</p>
          <a
            className="site-footer__social"
            href="#"
            aria-label="Facebook"
          >
            f
          </a>
        </div>

        <div className="site-footer__col">
          <p className="eyebrow">Contact</p>
          <ul>
            <li>{footer.contact.address}</li>
            <li>{footer.contact.phone}</li>
            <li>{footer.contact.email}</li>
          </ul>
        </div>

        <div className="site-footer__col">
          <p className="eyebrow">Liens rapides</p>
          <ul>
            {footer.quickLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <p className="eyebrow">Heures des cultes</p>
          <ul>
            {footer.serviceHours.map((item) => (
              <li key={item.day}>
                <strong>{item.day}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__secondary">
        {footer.secondaryLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </div>

      <div className="container site-footer__copyright">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
