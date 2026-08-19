import { useState } from "react";
import { newsletter } from "../content.js";
import "./Newsletter.css";

// Replace with your real Formspree endpoint: https://formspree.io/forms/<id>
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

const STATUS = {
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Newsletter() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = data.get("email");

    if (!email) {
      setStatus(STATUS.ERROR);
      setErrorMessage("Veuillez entrer votre courriel.");
      return;
    }

    setStatus(STATUS.SUBMITTING);
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus(STATUS.SUCCESS);
      form.reset();
    } catch (error) {
      setStatus(STATUS.ERROR);
      setErrorMessage("Une erreur est survenue — réessayez.");
    }
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <h2>{newsletter.title}</h2>
        <p className="newsletter__body">{newsletter.body}</p>

        {status === STATUS.SUCCESS ? (
          <p className="newsletter__success" role="status">
            Merci ! Vous êtes inscrit(e).
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <div className="newsletter__row">
              <div className="newsletter__field">
                <label htmlFor="firstName">Prénom</label>
                <input id="firstName" name="firstName" type="text" placeholder="Jean" />
              </div>
              <div className="newsletter__field">
                <label htmlFor="lastName">Nom</label>
                <input id="lastName" name="lastName" type="text" placeholder="Dupont" />
              </div>
            </div>
            <div className="newsletter__field">
              <label htmlFor="email">Courriel</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jean.dupont@courriel.org"
              />
            </div>

            {status === STATUS.ERROR && (
              <p className="newsletter__error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-solid newsletter__submit"
              disabled={status === STATUS.SUBMITTING}
            >
              {status === STATUS.SUBMITTING ? "Envoi…" : newsletter.cta}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
