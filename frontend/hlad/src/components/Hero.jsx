/* src/components/Hero.jsx */

import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

const slides = [
  {
    title1: "शब्दों से",
    title2: "विचारों की",
    title3: "क्रांति",
    subtitle:
      "Where Hindi literature meets the art of persuasion",

    motion:
      "यह सदन मानता है कि सोशल मीडिया हिंदी साहित्य के लिए हानिकारक है।",
  },

  {
    title1: "संवाद से",
    title2: "राष्ट्र की",
    title3: "नई दिशा",
    subtitle:
      "Ideas that inspire debate and leadership.",

    motion:
      "क्या हिंदी को संयुक्त राष्ट्र की आधिकारिक भाषा बनाया जाना चाहिए?",
  },

  {
    title1: "युवा शक्ति",
    title2: "और हिंदी",
    title3: "अभिव्यक्ति",
    subtitle:
      "Celebrating literature, culture and public speaking.",

    motion:
      "आधुनिक हिंदी कविता ने अपनी लय और छंद खो दिया है।",
  },
];

function StatItem({ num, suffix, label }) {
  const [count, ref] = useCounter(num);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-num">
        {count}
        <span>{suffix}</span>
      </div>

      <div className="stat-label">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {

  const [active, setActive] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActive((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero-carousel">

      {/* FLOATING ORBS */}

      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {slides.map((slide, index) => (

        <div
          key={index}
          className={`hero-slide ${
            active === index ? "active-slide" : ""
          }`}
        >

          <div className="hero-grid">

            {/* LEFT */}

            <div className="hero-left">

              <div className="hero-badge">
                HLAD · NIT Kurukshetra
              </div>

              <h1 className="hero-h1">

                {slide.title1}

                <br />

                <em>{slide.title2}</em>

                <br />

                {slide.title3}

              </h1>

              <p className="hero-sub">
                {slide.subtitle}
              </p>

              <div className="hero-btns">

                <a
                  href="#"
                  className="btn-fill"
                >
                  क्लब में शामिल हों →
                </a>

                <a
                  href="#"
                  className="btn-ghost"
                >
                  वाद-विवाद देखें
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="hero-right">

              <div className="hero-card">

                <div className="hero-card-accent" />

                <div className="motion-top">

                  <div className="motion-live" />

                  <div className="motion-label">
                    THIS MONTH'S MOTION
                  </div>

                </div>

                <h3 className="motion-text">
                  "{slide.motion}"
                </h3>

                <div className="motion-progress">
                  <div className="motion-fill" />
                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

      {/* DOTS */}

      <div className="carousel-dots">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setActive(i)}
            className={`dot ${
              active === i ? "active-dot" : ""
            }`}
          />

        ))}

      </div>

      {/* STATS */}

      <div className="stats-strip">

        {/* <div className="stats-inner">

          <StatItem
            num={340}
            suffix="+"
            label="सक्रिय सदस्य"
          />

          <StatItem
            num={12}
            suffix="वर्ष"
            label="गौरवशाली इतिहास"
          />

          <StatItem
            num={89}
            suffix="+"
            label="वाद-विवाद प्रतियोगिताएँ"
          />

          <StatItem
            num={24}
            suffix=""
            label="राष्ट्रीय पुरस्कार"
          />

        </div> */}

      </div>

    </section>
  );
}