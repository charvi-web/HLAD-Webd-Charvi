/* src/components/Debates.jsx */

import { useReveal } from "../hooks/useReveal";

const debates = [
  {
    motion:
      "क्या हिंदी को संयुक्त राष्ट्र की आधिकारिक भाषा बनाया जाना चाहिए?",
    date: "२१ जून",
    venue: "सभागार-३",
    level: "अन्तर-महाविद्यालय",
    status: "आगामी",
  },

  {
    motion:
      "आधुनिक हिंदी कविता ने अपनी लय और छंद खो दिया है।",
    date: "०५ जुलाई",
    venue: "ऑनलाइन",
    level: "क्लब आंतरिक",
    status: "पंजीकरण खुला",
  },

  {
    motion:
      "बॉलीवुड ने हिंदी भाषा के स्तर को गिराया है।",
    date: "१९ जुलाई",
    venue: "सभागार-१",
    level: "राष्ट्रीय",
    status: "जल्द ही",
  },
];

function DebateCard({ d, i }) {

  const ref = useReveal();

  const statusColor =
    d.status === "आगामी"
      ? "#ff7a00"
      : d.status === "पंजीकरण खुला"
      ? "#d97706"
      : "#8b6b56";

  return (

    <div
      ref={ref}
      className="debate-card reveal"
      style={{
        transitionDelay: `${i * 0.15}s`,
      }}
    >

      {/* TOP */}

      <div className="debate-top">

        <div className="debate-tag">
          Debate Motion
        </div>

        <div
          className="status-box"
          style={{
            border: `1px solid ${statusColor}`,
          }}
        >

          <span
            className="status-dot"
            style={{
              background: statusColor,
            }}
          />

          <span
            className="status-text"
            style={{
              color: statusColor,
            }}
          >
            {d.status}
          </span>

        </div>

      </div>

      {/* MOTION */}

      <h3 className="debate-motion">
        “{d.motion}”
      </h3>

      {/* META */}

      <div className="debate-meta">

        <div className="debate-meta-box">
          <span>📅</span>
          <p>{d.date}</p>
        </div>

        <div className="debate-meta-box">
          <span>📍</span>
          <p>{d.venue}</p>
        </div>

        <div className="debate-meta-box">
          <span>🏆</span>
          <p>{d.level}</p>
        </div>

      </div>

      {/* SIDE LABELS */}

      <div className="debate-badges">

        <span className="side-badge side-pak">
          पक्ष
        </span>

        <span className="side-badge side-vip">
          विपक्ष
        </span>

      </div>

      {/* NUMBER */}

      <div className="debate-num">
        0{i + 1}
      </div>

    </div>
  );
}

export default function Debates() {

  const headRef = useReveal();

  return (

    <section className="debates-section">

      <div className="container">

        <div
          ref={headRef}
          className="reveal debates-head"
        >

          <div>

            <div className="sec-label">
              वाद-विवाद
            </div>

            <h2 className="sec-h2">
              आगामी प्रतियोगिताएँ
            </h2>

          </div>

          <a href="#" className="btn-ghost">
            सभी देखें →
          </a>

        </div>

        {/* VERTICAL LAYOUT */}

        <div className="debate-grid">

          {debates.map((d, i) => (

            <DebateCard
              key={i}
              d={d}
              i={i}
            />

          ))}

        </div>

      </div>

    </section>
  );
}