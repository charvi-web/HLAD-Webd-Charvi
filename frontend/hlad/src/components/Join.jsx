import { useReveal } from "../hooks/useReveal";

export default function Join() {
  const ref = useReveal();

  return (
    <section className="join-section">
      <div className="join-circle join-circle-big" />

      <div className="join-circle join-circle-small" />

      <div
        ref={ref}
        className="reveal join-content"
      >
        <div className="ornament-divider join-divider">
          <span className="join-symbol">
            ◈
          </span>
        </div>

        <h2 className="join-title">
          क्या आप भी इस <br />
          यात्रा का हिस्सा बनना चाहते हैं?
        </h2>

        <p className="join-text">
          हर शनिवार, हर शब्द, हर बहस —
          एक नया विचार, एक नई पहचान।
          HLAD में आपका स्वागत है।
        </p>

        <div className="join-buttons">
          <a href="#" className="join-btn-primary">
            अभी आवेदन करें →
          </a>

          <a href="#" className="join-btn-secondary">
            और जानें
          </a>
        </div>
      </div>
    </section>
  );
}