import { useEffect, useState } from "react";
import { nav } from "../content.js";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top">
          <span className="site-header__wordmark">EBBL</span>
          <span className="site-header__subtitle">Église Baptiste</span>
        </a>

        <nav className="site-header__nav" aria-label="Navigation principale">
          <ul>
            {nav.map((item, index) => (
              <li
                key={item.label}
                className="site-header__nav-item"
                onMouseEnter={() => item.children && setOpenIndex(index)}
                onMouseLeave={() => item.children && setOpenIndex(null)}
              >
                <a href="#">
                  {item.label}
                  {item.children && <span className="site-header__chevron" aria-hidden="true">▾</span>}
                </a>
                {item.children && openIndex === index && (
                  <ul className="site-header__dropdown">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a href="#">{child}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <nav className="site-header__mobile-nav" aria-label="Navigation mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <a href="#" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.children && (
                  <ul className="site-header__mobile-submenu">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a href="#" onClick={() => setMobileOpen(false)}>
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
