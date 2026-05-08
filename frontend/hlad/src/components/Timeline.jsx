import { useReveal } from "../hooks/useReveal";

const timeline = [
  {
    date: "जुलाई ०५",
    event: "साहित्य संगम",
    desc: "वार्षिक लेखन प्रतियोगिता और कवि-सम्मेलन।",
    type: "साहित्य",
  },
  {
    date: "जुलाई १९",
    event: "राष्ट्रीय वाद-विवाद",
    desc: "देश भर के कॉलेजों के साथ अंतर-महाविद्यालय बहस।",
    type: "वाद-विवाद",
  },
  {
    date: "अगस्त ०२",
    event: "कार्यशाला: कविता लेखन",
    desc: "अनुभवी कवि के साथ तीन दिवसीय शिविर।",
    type: "कार्यशाला",
  },
  {
    date: "अगस्त २३",
    event: "वार्षिक समारोह",
    desc: "पुरस्कार वितरण एवं सांस्कृतिक संध्या।",
    type: "उत्सव",
  },
];

const typeColor = {
  साहित्य: "var(--teal)",
  "वाद-विवाद": "var(--gold)",
  कार्यशाला: "var(--slate)",
  उत्सव: "#A0522D",
};

function TimelineItem({ ev, i }) {
  const ref = useReveal();
  const isLeft = i % 2 === 0;

  return (
    <div
      ref={ref}
      className="timeline-row reveal"
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <div className="timeline-dot" style={{ top: 24 }} />

      {isLeft ? (
        <>
          <div className="timeline-left">
            <div className="timeline-card">
              <div
                className="timeline-type"
                style={{ color: typeColor[ev.type] }}
              >
                {ev.type}
              </div>

              <p className="timeline-event">{ev.event}</p>

              <p className="timeline-desc">{ev.desc}</p>

              <div className="timeline-date">{ev.date}</div>
            </div>
          </div>
          <div />
        </>
      ) : (
        <>
          <div />
          <div className="timeline-right">
            <div className="timeline-card">
              <div
                className="timeline-type"
                style={{ color: typeColor[ev.type] }}
              >
                {ev.type}
              </div>

              <p className="timeline-event">{ev.event}</p>

              <p className="timeline-desc">{ev.desc}</p>

              <div className="timeline-date">{ev.date}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Timeline() {
  const headRef = useReveal();

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div ref={headRef} className="reveal timeline-head">
          <div className="sec-label center-label">कार्यक्रम</div>

          <h2 className="sec-h2">आगामी कार्यक्रम</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {timeline.map((ev, i) => (
            <TimelineItem key={i} ev={ev} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}