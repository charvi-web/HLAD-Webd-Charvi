/* src/components/Pillars.jsx */

import {useReveal} from "../hooks/useReveal";

const pillars = [
  {
    hi: "साहित्य",
    label: "Sahitya",
    desc: "हिंदी साहित्य का अध्ययन।",
  },
  {
    hi: "विचार",
    label: "Vichar",
    desc: "रचनात्मक लेखन।",
  },
  {
    hi: "वाद-विवाद",
    label: "Vaad",
    desc: "तर्क और संवाद।",
  },
];

function PillarItem({ p }) {

  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "white",
        padding: "40px",
        border: "1px solid var(--border)"
      }}
    >

      <div className="sec-label">
        {p.label}
      </div>

      <h3>
        {p.hi}
      </h3>

      <p>
        {p.desc}
      </p>

    </div>
  );
}

export default function Pillars() {

  const ref = useReveal();

  return (
    <section
      style={{
        padding: "100px 40px"
      }}
    >

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto"
        }}
      >

        <div
          ref={ref}
          className="reveal"
          style={{
            marginBottom: 60
          }}
        >

          <div className="sec-label">
            हमारे तीन स्तंभ
          </div>

          <h2 className="sec-h2">
            तीन स्तंभ, एक लक्ष्य
          </h2>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24
          }}
        >

          {pillars.map((p) => (
            <PillarItem
              key={p.hi}
              p={p}
            />
          ))}

        </div>

      </div>

    </section>
  );
}